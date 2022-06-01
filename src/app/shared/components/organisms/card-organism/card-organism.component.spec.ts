import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrganismComponent } from './card-organism.component';

describe('CardOrganismComponent', () => {
  let component: CardOrganismComponent;
  let fixture: ComponentFixture<CardOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
