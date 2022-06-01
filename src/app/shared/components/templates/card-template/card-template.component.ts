import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss']
})
export class CardTemplateComponent implements OnInit {

  @Input()
  featurePlayList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
