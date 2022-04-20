import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { miscellaneousApiService } from '../../services/miscellaneous-api.service';
import { SendEmailInfo } from '../../models/sendEmailInfo';
import { MessageService } from '../../services/message.service';
import { LoginScreenService } from '../../services/login-screen.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  constructor(
    private socialAuthService: SocialAuthService,
    private miscellaneous: miscellaneousApiService,
    private message: MessageService,
    public loginScreen : LoginScreenService,
    private router : Router,
    private dialog: MatDialog,
    private userApi : UserApiService
  ) {}

  ngOnInit(): void { }

  wantsWithEmail: boolean = false;
  hidePassword: boolean = true;
  codeVerification: boolean = false;
  lang: string = localStorage.getItem('lang')!;
  codeFromEmail: string = '';

  loginForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(.+)@(hotmail|outlook|gmail).(com|es)$/),
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ),
  });

  loginGoogle() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => {
        this.socialAuthService.authState.subscribe((googleUser) => {
          this.loginScreen.email = googleUser.email;
          this.goToVerificationCode();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  register(): void {
    if (this.loginForm.valid) {
      this.loginScreen.email = this.loginForm.controls.email.value;
      this.loginScreen.password = this.loginForm.controls.password.value;
      this.goToVerificationCode();
    }
  }

  goToVerificationCode(): void {
    this.codeVerification = true;
    this.wantsWithEmail = false;
    this.lang = localStorage.getItem('lang')!;
    this.sendCodeEmail();
  }

  verifyCode(code: string): void {
    if (code === this.codeFromEmail) {
      this.userApi.getUser(this.loginScreen.email).subscribe((user : User) => {
        if (user) {
          this.router.navigate(['main'])
        } else {
          this.loginScreen.wantsAccess();
          this.router.navigate(['/login']);
        }
        this.dialog.closeAll();
      })
    } else {
      this.message.showInformation("Both codes don't match");
    }
  }

  sendCodeEmail(): void {
    this.miscellaneous
      .sendCodeVerificaction(new SendEmailInfo(this.loginScreen.email, this.lang))
      .subscribe((code: string) => {
        this.codeFromEmail = code;
      });
  }
}
