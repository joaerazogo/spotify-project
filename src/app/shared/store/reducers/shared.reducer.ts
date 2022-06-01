import { SharedState } from '../../../shared/models/shared-state.model';
import { createReducer, Action, on } from '@ngrx/store';
import { SharedActions } from '../actions';

export const initialState: SharedState = {
  featurePlaylist: undefined
}

const SharedReducer = createReducer<SharedState>(
  initialState,
  on(SharedActions.LoadFeaturePlaylist, (state: SharedState, action) => {
    return {
      ...state,
      featurePlaylist:{...action.featurePlaylist},
    }
  }),
)

export const sharedReducer = (
  state: SharedState,
  action: Action
) : SharedState => {
  return SharedReducer(state, action);
}
