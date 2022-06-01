import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedReducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { SharedEffectsArray } from './effects/index';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', SharedReducers.sharedReducer),
    EffectsModule.forFeature(SharedEffectsArray)
  ]
})
export class SharedStoreModule { }
