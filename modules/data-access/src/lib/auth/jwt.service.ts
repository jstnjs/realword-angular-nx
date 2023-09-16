import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, map } from 'rxjs';

type JwtToken = {
  iat: number;
  exp: number;
};

@Injectable({ providedIn: 'root' })
export class JWTService {
  private TOKEN = 'jwt';
  private EXP = 'expires_at';

  private _token$ = new BehaviorSubject<string | null>(null);
  token$: Observable<string | null> = this._token$.asObservable();

  isLoggedIn$: Observable<boolean> = this.token$.pipe(
    map((token) => this.isTokenValid(token))
  );

  constructor() {
    const storedToken = localStorage.getItem(this.TOKEN);
    this.setToken(storedToken);
  }

  setToken(jwt: string | null) {
    if (jwt !== null) {
      const decodedToken = jwtDecode<JwtToken>(jwt);
      localStorage.setItem(this.TOKEN, jwt);
      localStorage.setItem(this.EXP, decodedToken.exp.toString());
    } else {
      localStorage.removeItem(this.TOKEN);
      localStorage.removeItem(this.EXP);
    }

    this._token$.next(jwt);
  }

  removeToken() {
    this.setToken(null);
  }

  private isTokenValid(token: string | null): boolean {
    if (!token) {
      return false;
    }

    const exp = Number(localStorage.getItem(this.EXP));
    return exp ? 1000 * exp - new Date().getTime() >= 5000 : false;
  }
}
