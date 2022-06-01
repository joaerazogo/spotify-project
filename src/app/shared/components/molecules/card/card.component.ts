import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedActions } from 'src/app/shared/store/actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  song: any;

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {}

  addToPlayList(song: any){
    console.log(song);
    this.store.dispatch(SharedActions.AddPlaylist({playlistId: song?.id}));
  }

}
