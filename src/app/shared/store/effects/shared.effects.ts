import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, pipe } from 'rxjs';
import { SharedActions } from "../actions";
import { SharedService } from '../../services/shared.service';

@Injectable()
export class SharedEffects{

  constructor(
    private actions: Actions,
    private sharedService: SharedService
  ){}

  getFeaturePlayListEffect = createEffect(() => {
    return this.actions.pipe(
      (ofType(SharedActions.GetFeaturePlaylist)),
      mergeMap(() => {
        return this.sharedService.getFeaturePlayList().pipe(
          map((response: any) => {
            return SharedActions.LoadFeaturePlaylist({ featurePlaylist: response });
          }),
          catchError(() => {
            throw new Error();
          })
        );
      })
    );
  });

  addPlayListEffect = createEffect(() => {
    return this.actions.pipe(
      (ofType(SharedActions.AddPlaylist)),
      mergeMap((action) => {
        return this.sharedService.addPlayList(action.playlistId).pipe(
          map((response: any) => {
            return SharedActions.LoadFeaturePlaylist({ featurePlaylist: response });
          }),
          catchError(() => {
            throw new Error();
          })
        );
      })
    );
  });
}
