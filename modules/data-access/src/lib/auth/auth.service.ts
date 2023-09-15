import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JWTService } from './jwt.service';

export type LoginResponse = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);
  jwtService = inject(JWTService);

  login({ email, password }: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('https://api.realworld.io/api/users/login', {
        user: {
          email,
          password,
        },
      })
      .pipe(tap((response) => this.jwtService.setToken(response.user.token)));
  }

  logout() {
    this.jwtService.removeToken();
  }
}
