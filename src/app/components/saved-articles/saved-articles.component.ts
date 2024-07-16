import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SaveNews } from '../../shared/store/news/News.model';
import { getSavedNews } from '../../shared/store/news/News.selector';
import { loadSavedArticles, loadSavedHeadlines } from '../../shared/store/news/News.action';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-saved-articles',
  templateUrl: './saved-articles.component.html',
  styleUrl: './saved-articles.component.scss'
})
export class SavedArticlesComponent implements OnInit{

  savedNews$: Observable<SaveNews>;
  
  constructor(private store: Store<SaveNews>) {
    this.savedNews$ = this.store.select(getSavedNews);
  }
  
  ngOnInit(): void {
    
  }
}
