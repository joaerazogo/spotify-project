import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { LoginOrganismComponent } from './components/organisms/login-organism/login-organism.component';
import { RegisterTemplateComponent } from './components/templates/register-template/register-template.component';
import { RegisterOrganismComponent } from './components/organisms/register-organism/register-organism.component';
import { NavbarOrganismComponent } from './components/organisms/navbar-organism/navbar-organism.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FieldItemComponent } from './components/molecules/field-item/field-item.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/molecules/card/card.component';
import { CardOrganismComponent } from './components/organisms/card-organism/card-organism.component';
import { CardTemplateComponent } from './components/templates/card-template/card-template.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FavoriteMusicPageComponent } from './components/pages/favorite-music-page/favorite-music-page.component';
import { SharedStoreModule } from './store/shared-store.module';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginTemplateComponent,
    LoginOrganismComponent,
    RegisterTemplateComponent,
    RegisterOrganismComponent,
    NavbarOrganismComponent,
    RegisterPageComponent,
    FieldItemComponent,
    CardComponent,
    CardOrganismComponent,
    CardTemplateComponent,
    HomePageComponent,
    FavoriteMusicPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedStoreModule
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    FavoriteMusicPageComponent
  ],
  providers: [
    SharedService
  ],
})
export class SharedModule { }
