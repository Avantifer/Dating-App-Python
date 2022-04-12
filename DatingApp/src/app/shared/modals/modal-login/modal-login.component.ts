import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { miscellaneousApiService } from '../../services/miscellaneous-api.service';
import { SendEmailInfo } from '../../models/sendEmailInfo';
import { MessageService } from '../../services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  constructor(
    private socialAuthService: SocialAuthService,
    private miscellaneous: miscellaneousApiService,
    private message: MessageService
  ) {}

  ngOnInit(): void { }

  wantsWithEmail: boolean = false;
  hidePassword: boolean = true;
  codeVerification: boolean = false;
  emailUser: string = '';
  passwordUser: string = '';
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
          this.emailUser = googleUser.email;
          this.goToVerificationCode();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  register(): void {
    if (this.loginForm.valid) {
      this.emailUser = this.loginForm.controls.email.value;
      this.passwordUser = this.loginForm.controls.password.value;
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
      console.log('Todo piola');
    } else {
      this.message.showInformation("Both codes don't match");
    }
  }

  sendCodeEmail(): void {
    this.miscellaneous
      .sendCodeVerificaction(new SendEmailInfo(this.emailUser, this.lang))
      .subscribe((code: string) => {
        this.codeFromEmail = code;
      });
  }
}
