import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrganismComponent } from './register-organism.component';

describe('RegisterOrganismComponent', () => {
  let component: RegisterOrganismComponent;
  let fixture: ComponentFixture<RegisterOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
