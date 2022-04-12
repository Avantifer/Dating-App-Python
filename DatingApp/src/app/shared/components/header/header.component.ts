import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ModalLanguageComponent } from '../../modals/modal-language/modal-language.component';
import { ModalLoginComponent } from '../../modals/modal-login/modal-login.component';
import { LanguageService } from '../../services/language.service';
// @ts-ignore
import * as AOS from 'aos';
import { NavLink } from '../../models/navLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public translateService: TranslateService,
    private dialog: MatDialog,
    public langService: LanguageService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('lang')) this.langService.setLang('en');
  }

  navLinks: NavLink[] = [
    new NavLink('Safety', '/home/safety'),
    new NavLink('Privacity', '/home/privacity'),
    new NavLink('Learn', '/home/learn'),
  ];

  menuItems: NavLink[] = [
    new NavLink('Secret Love Plus', '/home/products/secret-love-plus'),
    new NavLink('Secret Love Mega', '/home/products/secret-love-mega'),
    new NavLink('Secret Love Ultra', '/home/products/secret-love-ultra'),
  ];

  openLanguageModal(): void {
    this.dialog.open(ModalLanguageComponent, {
      width: '26rem',
    });
  }

  openLoginModal(): void {
    this.dialog.open(ModalLoginComponent, {
      width: '30rem',
    });
  }
}
