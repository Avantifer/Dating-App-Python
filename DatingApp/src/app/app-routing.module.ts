import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LearnComponent } from './components/learn/learn.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacityComponent } from './components/privacity/privacity.component';
import { ProductsComponent } from './components/products/products.component';
import { SecretLoveMegaComponent } from './components/products/secret-love-mega/secret-love-mega.component';
import { SecretLovePlusComponent } from './components/products/secret-love-plus/secret-love-plus.component';
import { SecretLoveUltraComponent } from './components/products/secret-love-ultra/secret-love-ultra.component';
import { SafetyComponent } from './components/safety/safety.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {path : '', redirectTo:'/home', pathMatch : "full"},
  {path : 'home',component : HeaderComponent, children : [
    {path : '', component : HomeComponent},
    {path : 'safety', component : SafetyComponent},
    {path : 'privacity', component : PrivacityComponent},
    {path : 'learn', component : LearnComponent},
    {path : 'products', component : ProductsComponent, children : [
      {path : 'secret-love-plus', component : SecretLovePlusComponent},
      {path : 'secret-love-mega', component : SecretLoveMegaComponent},
      {path : 'secret-love-ultra', component : SecretLoveUltraComponent},
    ]}
  ]},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
