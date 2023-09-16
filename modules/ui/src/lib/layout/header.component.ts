import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoggedInDirective } from 'util';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoggedInDirective],
  selector: 'lib-ui-layout-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {}
