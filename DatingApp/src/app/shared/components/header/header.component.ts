import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ModalLanguageComponent } from '../../modals/modal-language/modal-language.component';
import { LanguageService } from '../../services/language.service';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translateService : TranslateService, private dialog : MatDialog, public langService : LanguageService) { }
  
  ngOnInit(): void {
    if (!localStorage.getItem('lang')) this.langService.setLang('en');
  }
  
  openLanguageModal() : void {
    this.dialog.open(ModalLanguageComponent, {
      width : '25rem' 
    });
  }
}