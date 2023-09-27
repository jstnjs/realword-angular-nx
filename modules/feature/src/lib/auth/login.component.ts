import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { AuthService } from 'data-access';
import { catchError, throwError } from 'rxjs';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, LetDirective, RouterLink],
  selector: 'lib-feature-auth-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  loginForm = this.fb.nonNullable.group({
    email: ['', []],
    password: ['', []],
  });

  login() {
    const credentials = this.loginForm.getRawValue();
    this.authService
      .login(credentials)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      )
      .subscribe();
  }
}
