import { Route } from '@angular/router';
import { HomeComponent, LoginComponent, RegisterComponent } from 'feature';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
