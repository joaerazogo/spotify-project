
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { SharedSelectors } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-card-organism',
  templateUrl: './card-organism.component.html',
  styleUrls: ['./card-organism.component.scss']
})
export class CardOrganismComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  featurePlayList: any;
  
  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    
  }

}
