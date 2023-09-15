import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';

type JwtToken = {
  iat: number;
  exp: number;
};

@Injectable({ providedIn: 'root' })
export class JWTService {
  private TOKEN = 'jwt';
  private EXP = 'expires_at';

  private get token(): string | null {
    return localStorage.getItem(this.TOKEN);
  }

  setToken(jwt: string) {
    const decodedToken = jwtDecode<JwtToken>(jwt);
    localStorage.setItem(this.TOKEN, jwt);
    localStorage.setItem(this.EXP, decodedToken.exp.toString());
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.EXP);
  }

  private get exp(): number {
    return Number(localStorage.getItem(this.EXP));
  }

  isLoggedIn(): Observable<boolean> {
    if (!this.token) {
      return of(false);
    }

    if (this.isTokenExpired()) {
      return of(false);
    }

    return of(true);
  }

  private isTokenExpired(): boolean {
    if (this.exp) {
      return 1000 * this.exp - new Date().getTime() < 5000;
    }

    return false;
  }
}
