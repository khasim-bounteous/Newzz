import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleModel, Articles } from '../../shared/store/news/News.model';
import { loadArticles } from '../../shared/store/news/News.action';
import { getArticles } from '../../shared/store/news/News.selector';
import { debounceTime, interval, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-world-newz',
  templateUrl: './world-newz.component.html',
  styleUrl: './world-newz.component.scss'
})
export class WorldNewzComponent implements OnInit{

  constructor(
    private store: Store<Articles>
  ) { }

  private unsubscribe$ = new Subject<void>();
  articles$!: Observable<Articles>;
  totalResults!: number;
  query = new FormControl("cricket")
  language = 'en'
  sortBy = "popularity"
  articles !: ArticleModel[]
  pageIndex: number = 0;
  pageSize: number = 20;

  ngOnInit(): void {
    this.initializeArticles();
    this.setupQueryChangeSubscription();
  }

  private initializeArticles(): void {
    this.articles$ = this.store.select(getArticles).pipe(
      takeUntil(this.unsubscribe$)
    );

    this.articles$.subscribe(item => {
      console.log("hello world")
      this.articles = item.articles;
      this.language = item.language;
      this.sortBy = item.sortBy;
      this.query.setValue(item.query, { emitEvent: false });
      this.totalResults = item.totalResults,
      this.pageIndex = item.pageIndex,
      this.pageSize = item.pageSize
    });
  }

  private setupQueryChangeSubscription(): void {
    this.query.valueChanges.pipe(
      debounceTime(2000),
      tap(() =>{
        this.pageIndex = 0;
        if(this.query.value?.trim()!=='')
        this.loadArticles()
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadArticles(){
    this.store.dispatch(loadArticles({ query: this.query.value as string, sortBy:this.sortBy, language: this.language, domains: '', pageSize: this.pageSize, pageIndex: this.pageIndex }));
  }

  onClickSortBy(sortBy: string): void {
    this.sortBy = sortBy
    this.pageIndex = 0;
    this.loadArticles()
  }

  onPageChange(event: PageEvent):void{
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadArticles()
  }

  onLanguageChange(): void {
    this.pageIndex = 0
    this.loadArticles()
  }
}
