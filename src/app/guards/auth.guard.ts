import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService){

  }

  canActivate(): Observable<boolean> | boolean {
    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    return true;
  }
}
