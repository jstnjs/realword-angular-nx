import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { JWTService } from 'data-access';
import { distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({ selector: '[libLoggedIn]', standalone: true })
export class LoggedInDirective implements OnInit {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private jwtService = inject(JWTService);

  ngOnInit(): void {
    this.jwtService.isLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
