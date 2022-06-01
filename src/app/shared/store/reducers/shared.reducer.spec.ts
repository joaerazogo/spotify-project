import { SharedState } from '../../../shared/models/shared-state.model';
import { SharedActions } from '../actions/index';
import { sharedReducer } from './shared.reducer';

describe('ShareReducers', () => {
  let expectedSharedState: SharedState;

  beforeEach(() => {
    expectedSharedState = {
      featurePlaylist: undefined
    };
  });

  it('Debe de cambiar el toggle en el state', () => {
    const featurePlaylist = 'value';
    const action = {
      type: SharedActions.SharedActionTypes.LOAD_FEATURE_PLAYLIST,
      featurePlaylist,
    };

    expectedSharedState.featurePlaylist = featurePlaylist;
    const result = sharedReducer(expectedSharedState, action);
    expect(expectedSharedState).toEqual(result);
  });
});