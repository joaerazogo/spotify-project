import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteMusicComponent } from './components/favorite-music/favorite-music.component';
import { FavoriteMusicRoutingModule } from './music-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FavoriteMusicComponent
  ],
  imports: [
    CommonModule,
    FavoriteMusicRoutingModule,
    SharedModule
  ]
})
export class MusicModule { }
