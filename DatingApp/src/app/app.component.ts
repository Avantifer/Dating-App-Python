import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './shared/services/language.service';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';

  typeScriptvalue: string | undefined;

  constructor(private translateService : TranslateService, private langService : LanguageService) {
    this.translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.translateService.use(this.langService.actualLanguage);
    AOS.init();
  }
}
