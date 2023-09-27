import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'lib-feature-auth-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {}
