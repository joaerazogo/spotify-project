import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrganismComponent } from './login-organism.component';

describe('LoginOrganismComponent', () => {
  let component: LoginOrganismComponent;
  let fixture: ComponentFixture<LoginOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
