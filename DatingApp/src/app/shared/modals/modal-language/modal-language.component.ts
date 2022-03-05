import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '../../models/lang.interfaces';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-modal-language',
  templateUrl: './modal-language.component.html',
  styleUrls: ['./modal-language.component.scss']
})
export class ModalLanguageComponent implements OnInit, AfterViewInit {

  constructor(public translateService : TranslateService, public langService : LanguageService) { }
  
  ngOnInit(): void {
    this.arrayLanguages.forEach( (lang : Lang) => {
      if (lang.abr == this.langService.actualLanguage) {
        this.languages.addControl(lang.abr, new FormControl(true))
      }else {
        this.languages.addControl(lang.abr, new FormControl(false))
      }
    });
  }
  
  ngAfterViewInit(): void {
    let languageSelected = document.querySelector('.'+this.langService.actualLanguage);
    this.resetSelectedItems(languageSelected); 
  }

  languages : FormGroup = new FormGroup({})
  arrayLanguages : Array<Lang> = this.langService.arrayLanguages;

  changeLange(lang : string) {
    let languageSelected : Element | null = document.querySelector('.' + lang);
    languageSelected?.classList.add('selected');

    this.langService.setLang(lang)
    this.translateService.use(lang);
    
    let elementsSelected : NodeListOf<Element> = document.querySelectorAll('.selected');
    elementsSelected.forEach((element : Element) => {
      element.classList.remove('selected');
    });

    this.resetSelectedItems(languageSelected);
  }

  resetSelectedItems(languageSelected : Element | null) {
    let p = languageSelected?.childNodes[0].firstChild as HTMLElement;
    p.classList.add('selected');
    languageSelected?.classList.add('selected');
    let radioButton : HTMLElement = languageSelected?.childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0] as HTMLElement;
    radioButton.classList.add('selected');
  }

  
}
