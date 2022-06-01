import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-organism',
  templateUrl: './navbar-organism.component.html',
  styleUrls: ['./navbar-organism.component.scss']
})
export class NavbarOrganismComponent implements OnInit {

  @Input()
  showOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
