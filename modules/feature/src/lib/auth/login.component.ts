import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { AuthService } from 'data-access';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, LetDirective],
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
    this.authService.login(credentials).subscribe();
  }
}
