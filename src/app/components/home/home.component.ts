import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Articles, HeadLines, SourceHeadlines } from '../../shared/store/news/News.model';
import { Observable } from 'rxjs';
import { getArticles, getHeadlines, getSourceHeadlines } from '../../shared/store/news/News.selector';
import { NewzServiceService } from '../../services/newz-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  headlines$: Observable<SourceHeadlines>;
  articles$: Observable<Articles>;
  

  constructor(
    private store: Store<{headlines:SourceHeadlines,articles:Articles}>,
  ) {
    this.headlines$ = this.store.select(getSourceHeadlines);
    this.articles$ = this.store.select(getArticles);
  }
  
  ngOnInit(): void {
      
  }
}

