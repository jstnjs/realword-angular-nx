import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  user: {
    email: string;
    password: string;
  };
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'https://api.realword.io/api/articles',
      loginRequest
    );
  }
}
