import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LearnComponent } from './components/learn/learn.component';
import { PrivacityComponent } from './components/privacity/privacity.component';
import { ProductsComponent } from './components/products/products.component';
import { SecretLoveMegaComponent } from './components/products/secret-love-mega/secret-love-mega.component';
import { SecretLovePlusComponent } from './components/products/secret-love-plus/secret-love-plus.component';
import { SecretLoveUltraComponent } from './components/products/secret-love-ultra/secret-love-ultra.component';
import { SafetyComponent } from './components/safety/safety.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'safety', component : SafetyComponent},
  {path : 'privacity', component : PrivacityComponent},
  {path : 'learn', component : LearnComponent},
  {path : 'products', component : ProductsComponent, children : [
    {path : 'secret-love-plus', component : SecretLovePlusComponent},
    {path : 'secret-love-mega', component : SecretLoveMegaComponent},
    {path : 'secret-love-ultra', component : SecretLoveUltraComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
