import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SharedState } from '../../../shared/models/shared-state.model';

export const selectSharedStore = createFeatureSelector<SharedState>(
  'shared'
);

export const selectFeaturePlaylist = createSelector(
  selectSharedStore,
  (state: SharedState) => state.featurePlaylist
);
