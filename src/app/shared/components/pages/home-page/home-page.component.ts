import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { SharedSelectors } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  featurePlayList: any;

  constructor(
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.store
      .select(SharedSelectors.selectFeaturePlaylist)
      .pipe(
        filter((response) => response != undefined)
      )
      .subscribe((response) => {
        this.featurePlayList = response;
      });
  }

}
