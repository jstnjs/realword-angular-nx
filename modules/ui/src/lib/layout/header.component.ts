import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'lib-ui-layout-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {}
