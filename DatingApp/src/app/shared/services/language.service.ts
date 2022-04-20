import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLanguageComponent } from '../modals/modal-language/modal-language.component';
import { Lang } from '../models/lang.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private dialog: MatDialog) {}

  arrayLanguages: Array<Lang> = [
    {
      abr: 'en',
      name: 'English',
      icon: '../../../../assets/icons/usa-icon.webp',
    },
    {
      abr: 'es',
      name: 'Spanish',
      icon: '../../../../assets/icons/spain-icon.webp',
    },
  ];

  actualLanguage: string = localStorage.getItem('lang') || 'en';

  getLangName(): string {
    let langName: string = '';
    this.arrayLanguages.forEach((lang: Lang) => {
      if (lang.abr == this.actualLanguage) {
        langName = lang.name;
      }
    });
    return langName;
  }

  setLang(lang: string): void {
    localStorage.setItem('lang', lang);
    this.actualLanguage = lang;
  }

  openLanguageModal() : void {
    this.dialog.open(ModalLanguageComponent, {
      width: '26rem',
      panelClass: 'modal-language'
    });
  }
}
