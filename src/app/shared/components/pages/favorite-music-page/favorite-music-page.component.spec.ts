import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMusicPageComponent } from './favorite-music-page.component';

describe('FavoriteMusicPageComponent', () => {
  let component: FavoriteMusicPageComponent;
  let fixture: ComponentFixture<FavoriteMusicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMusicPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMusicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
