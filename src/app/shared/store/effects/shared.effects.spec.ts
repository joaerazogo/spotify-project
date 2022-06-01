import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";
import { TestBed } from '@angular/core/testing';

import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { SharedState } from '../../../shared/models/shared-state.model';
import { SharedActions } from '../actions/index';
import { SharedEffects } from './shared.effects';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

describe('SharedEffects', () => {
  @Component({
    selector: 'app-dialog-loading',
    template: '<p>Mock Dialog loading</p>',
  })
  class MockDialogLoadingComponent {}
  const sharedService = {
    getEstateTypes: jest.fn(),
    findDescriptionById: jest.fn(),
    getCities: jest.fn(),
  }

  const router = {
    navigate: jest.fn()
  }

  const contractService = {
    getContractById: jest.fn()
  }

  const expectedSharedStore: SharedState = {
    featurePlaylist: undefined
  }

  const dialogRefMock = {
    afterOpened: jest.fn(() => of(true))
  };

  const dialogMock = {
    open: jest.fn(() => dialogRefMock),
  };

  let actions$ = new Observable<Action>();
  let effects: SharedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule
      ],
      providers: [
        {
          provide: SharedService,
          useValue: sharedService
        },
        { provide: Router, useValue: router },
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { shared: expectedSharedStore },
        }),
        SharedEffects
      ],
    });

    effects = TestBed.inject(SharedEffects);
  });
});
