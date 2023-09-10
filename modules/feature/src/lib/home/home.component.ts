import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArticleService } from 'data-access';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  selector: 'lib-feature-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  articleService = inject(ArticleService);
  articles$ = this.articleService
    .articles()
    .pipe(map((articleResponse) => articleResponse.articles));
}
