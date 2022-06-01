import { createAction, props } from '@ngrx/store';

export enum SharedActionTypes {
  GET_FEATURE_PLAYLIST = '[Shared] Get Feature Playlist',
  LOAD_FEATURE_PLAYLIST = '[Shared] Load Feature Playlist',
  ADD_PLAYLIST = '[Shared] Add Playlist',
  REMOVE_PLAYLIST = '[Shared] Remove Playlist',
}

export const GetFeaturePlaylist = createAction(
  SharedActionTypes.GET_FEATURE_PLAYLIST
)

export const LoadFeaturePlaylist = createAction(
  SharedActionTypes.LOAD_FEATURE_PLAYLIST,
  props<{ featurePlaylist: any }>()
);

export const AddPlaylist = createAction(
  SharedActionTypes.ADD_PLAYLIST,
  props<{ playlistId: string }>()
);

export const RemovePlaylist = createAction(
  SharedActionTypes.REMOVE_PLAYLIST,
  props<{ playlistId: string }>()
);