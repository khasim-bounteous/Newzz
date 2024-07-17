import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Articles, HeadLines } from '../../shared/store/news/News.model';
import { Observable } from 'rxjs';
import { getArticles, getHeadlines } from '../../shared/store/news/News.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  headlines$: Observable<HeadLines>;
  articles$: Observable<Articles>;
  
  constructor(private store: Store<{headlines:HeadLines,articles:Articles}>) {
    this.headlines$ = this.store.select(getHeadlines);
    this.articles$ = this.store.select(getArticles);
  }
  
  ngOnInit(): void {
      
  }
}

