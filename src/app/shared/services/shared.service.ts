import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  getFeaturePlayList():Observable<any>{
    return this.http.get<any>(environment.BASE_URL_INFO + environment.FEATURE_PLAYLIST, this.getHttpOptions());
  }

  addPlayList(playlistId: string){
    return this.http.post<any>(environment.BASE_URL_INFO + `v1/playlists/${playlistId}/tracks`, this.getHttpOptions());
  }

  removePlayList(playlistId: string){
    return this.http.delete<any>(environment.BASE_URL_INFO + `v1/playlists/${playlistId}/tracks`, this.getHttpOptions());
  }

  getHttpOptions(): any{
    const session = localStorage.getItem(environment.LOCAL_STORAGE_SESSION);
    const tokenType = environment.TOKEN_TYPE;

    const httpOptions = {
      headers: new HttpHeaders({
       /*  'Authorization': tokenType + ' ' + session, */
        'Authorization': 'Bearer BQCHHfm82LgMYUtZBGsAVfbgVM6W0ko_p8ZsEfe12loZTV74KHt6Vck9THBlwjgCIe5EQ4dp1SMGpnh4FtkjzI9eLMOxDo34nqztFWij0yMtPyMbca_i0tl28ZTtbvcGlrF-vrpExW9Qi3FK78_J32hTNHBGt10',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return httpOptions;
  }
}
