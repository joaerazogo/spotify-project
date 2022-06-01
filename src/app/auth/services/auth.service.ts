import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clientId: string = '80227546cd914dd89cfe29e45e4be4e7';
  clientSecret: string = '80227546cd914dd89cfe29e45e4be4e7';
  redirectUrl: string = 'http://localhost:4200/home';
  code: string = '';

  constructor(private http: HttpClient) { }

  login(params: any, baseUrl: string = environment.BASE_URL_AUTH) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    };

    this.code = this.randomString(16);

    const form: any = {
      code: this.code,
      redirect_uri: this.redirectUrl,
      grant_type: 'authorization_code'
    };

    return this.http
      .post<any>(`${baseUrl}/api/token`, form, { headers })
      .pipe(
        map(resp => {
          const dataToken = {
            accessToken: resp.access_token,
            refreshToken: resp.refresh_token,
            expiresIn: resp.expires_in,
          };
          return resp; 
        })
      );
  }

  randomString(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}

  getToken(){
    return localStorage.getItem(environment.LOCAL_STORAGE_SESSION);
  }

  saveSession(token: string){
    localStorage.setItem(environment.LOCAL_STORAGE_SESSION, token)
  }

}
