import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MediumOption, SimpleOption } from 'src/app/shared/models/optionsLogin';
import { LanguageService } from 'src/app/shared/services/language.service';
import { LoginScreenService } from 'src/app/shared/services/login-screen.service';
import { v4 as uuidv4 } from 'uuid';
import { IplocationService } from 'src/app/shared/services/iplocation.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';
import { EncrDecrService } from 'src/app/shared/services/encr-decr.service';
import { User } from 'src/app/shared/models/user';
import { UserApiService } from '../../shared/services/user-api.service';
import { ProfilepicsApiService } from 'src/app/shared/services/profilepics-api.service';
import { ProfilePic } from 'src/app/shared/models/profilePic';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  comprobationForm: boolean = false;
  ipAddress: string = '';
  country: string = '';
  region: string = '';
  city: string = '';
  imgData: string = '';
  profilePics: string[] = [];

  birthday: string = '';

  constructor(
    public langService: LanguageService,
    public loginScreen: LoginScreenService,
    private iplocation: IplocationService,
    private message: MessageService,
    private router: Router,
    private encrDecr: EncrDecrService,
    private userApi: UserApiService,
    private profilePicsApi: ProfilepicsApiService
  ) {}

  ngOnInit(): void {
    this.getIPLocation();
  }

  profilePicsNumbers: string[] = [
    'profilePics0',
    'profilePics1',
    'profilePics2',
    'profilePics3',
    'profilePics4',
    'profilePics5',
  ];

  birthdayOptions: MediumOption[] = [
    new MediumOption('day', 'DD', 2),
    new MediumOption('month', 'MM', 2),
    new MediumOption('year', 'AAAA', 4),
  ];

  genderOptions: SimpleOption[] = [
    new SimpleOption('Man', 'male'),
    new SimpleOption('Woman', 'female'),
    new SimpleOption('Other', 'other'),
  ];

  interestOptions: SimpleOption[] = [
    new SimpleOption('Men', 'male'),
    new SimpleOption('Women', 'female'),
    new SimpleOption('Everyone', 'everyone'),
  ];

  userForm = new FormGroup({
    name: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+|[a-zA-ZÀ-ÿ\u00f1\u00d1]+\s+$/
        ),
        Validators.maxLength(25),
      ])
    ),
    tel: new FormControl('', Validators.required),
    birthday: new FormGroup({
      day: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^([0][1-9])$|^([1][0-2])$/),
        ])
      ),
      month: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^([0][1-9])$|^([1][0-2])$/),
        ])
      ),
      year: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ),
    }),
    gender: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required),
  });

  selectOption(
    event: MouseEvent,
    formName: string,
    option: SimpleOption
  ): void {
    let childrens: NodeListOf<ChildNode> = document.querySelector(
      '.' + formName
    )!.childNodes;
    childrens.forEach((children: ChildNode) => {
      if (children.nodeName != '#comment') {
        let childrenHTML: HTMLElement = children as HTMLElement;
        if (childrenHTML.classList.contains('selected')) {
          childrenHTML.classList.remove('selected');
        }
      }
    });

    let elemSelected: HTMLElement = event.target as HTMLElement;
    elemSelected.classList.add('selected');
    this.userForm.get(formName)?.setValue(option.value);
  }

  getIPLocation(): void {
    this.iplocation.getIp().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });

    this.iplocation.getIpLocation(this.ipAddress).subscribe((res: any) => {
      this.city = res.city;
      this.country = res.country_name;
      this.region = res.region;
    });
  }

  register(): void {
    this.comprobationForm = true;
    if (this.userForm.valid) {
      this.getAllPhotos();
      if (this.profilePics.length > 0) {
        let idUser: string = uuidv4();
        let passwordEncrypt: string = this.encrDecr.encrypt(
          this.loginScreen.password
        );
        let birthday: string =
          this.userForm.get('birthday')?.get('year')?.value +
          '-' +
          this.userForm.get('birthday')?.get('month')?.value +
          '-' +
          this.userForm.get('birthday')?.get('day')?.value;
        let user: User = new User(
          idUser,
          this.userForm.get('tel')?.value,
          this.loginScreen.email,
          this.userForm.get('name')?.value,
          passwordEncrypt,
          birthday,
          this.userForm.get('gender')?.value,
          this.userForm.get('interest')?.value,
          this.city,
          this.region,
          this.country,
          'user'
        );

        this.userApi.register(user).subscribe((result: boolean) => {
          if (result) {
            this.loginScreen.removeAccess();
          } else {
            this.message.showInformation('Something ocurred');
          }
        });

        for (let image of this.profilePics) {
          let idImage: string = uuidv4();
          let profilePic: ProfilePic = new ProfilePic(idImage, idUser, image);
          this.profilePicsApi.create(profilePic).subscribe();
        }

        this.router.navigate(['/main']);
      } else {
        this.message.showInformation('You need to put some images');
      }
    } 
  }

  getPhoto(event: any) {
    let photo: File = event.target.files[0];
    let divParent: HTMLElement = event.path[1];
    let circle: HTMLElement = event.srcElement.nextSibling;
    let circleClose: HTMLElement = circle.nextSibling as HTMLElement;

    if (photo != undefined) {
      if (
        photo.type === 'image/png' ||
        photo.type === 'image/jpg' ||
        photo.type === 'image/jpeg'
      ) {
        let reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = () => {
          if (reader.result != null) {
            this.imgData = reader.result.toString();
            divParent.classList.add('withImage');
            circle.classList.add('invisible');
            circleClose.classList.remove('invisible');
            divParent.style.backgroundImage =
              "url('" + this.imgData.replace(/(\r\n|\n|\r)/gm, '') + "')";
          }
        };
      } else {
        this.message.showInformation(
          'You must upload images with png, jpg or jpeg format'
        );
      }
    }
  }

  deletePhoto(event: any): void {
    let divParent: HTMLElement = event.path[2];
    let circleClose: HTMLElement = event.path[1];
    let circle: HTMLElement = circleClose.previousElementSibling as HTMLElement;
    divParent.style.removeProperty('background-image');
    divParent.classList.remove('withImage');
    circle.classList.remove('invisible');
    circleClose.classList.add('invisible');
  }

  getAllPhotos(): void {
    let allDivs = document.querySelectorAll('.profilePics.withImage');
    allDivs.forEach((div: Element) => {
      let divImage: HTMLElement = div as HTMLElement;
      this.profilePics.push(
        divImage.style.backgroundImage.replace(/url\("|"\)/gm, '').toString()
      );
    });
  }
}
