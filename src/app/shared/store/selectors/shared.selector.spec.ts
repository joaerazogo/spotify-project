import { SharedState } from '../../../shared/models/shared-state.model';
import { selectFeaturePlaylist } from './shared.selector';

describe('SharedSelectors', () => {
  let expectedSharedState: SharedState;
  beforeEach(() => {
    expectedSharedState = {
      featurePlaylist: undefined
    }
  });

  it('Debe de retornar estateTypes', () => {
    const result = selectFeaturePlaylist.projector(expectedSharedState);
    expect(result).toEqual(expectedSharedState.featurePlaylist);
  });

});
