import { Route } from '@angular/router';
import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  SettingsComponent,
} from 'feature';

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
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
