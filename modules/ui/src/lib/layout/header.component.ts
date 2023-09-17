import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { JWTService } from 'data-access';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AsyncPipe],
  selector: 'lib-ui-layout-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  jwtService = inject(JWTService);

  $isLoggedIn = this.jwtService.isLoggedIn$;
}
