import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, ArticlesResponse } from './article.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  http = inject(HttpClient);

  articles(): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(
      'https://api.realworld.io/api/articles'
    );
  }
}
