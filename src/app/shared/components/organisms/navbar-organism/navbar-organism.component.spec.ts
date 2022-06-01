import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOrganismComponent } from './navbar-organism.component';

describe('NavbarOrganismComponent', () => {
  let component: NavbarOrganismComponent;
  let fixture: ComponentFixture<NavbarOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
