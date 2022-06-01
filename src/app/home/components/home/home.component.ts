import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedActions } from '../../../shared/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featurePlayList: any;

  constructor(
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(SharedActions.GetFeaturePlaylist());    
  }

}
