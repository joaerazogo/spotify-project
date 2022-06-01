import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteMusicComponent } from './components/favorite-music/favorite-music.component';

const routes: Routes = [
  {
    path: "favorite-music",
    component: FavoriteMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteMusicRoutingModule { }
