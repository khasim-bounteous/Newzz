import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeadlineModel, HeadLines } from '../../shared/store/news/News.model';
import { loadHeadlines, setCategory, setCountry } from '../../shared/store/news/News.action';
import { getHeadlines } from '../../shared/store/news/News.selector';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  headLines$!: Observable<HeadLines>;

  constructor(
    private store: Store<HeadLines>
  ){}

  headLines!: HeadlineModel[];
  totalResults!: number;
  country: string = 'in';
  category: string = 'general';
  pageIndex: number = 0;
  pageSize: number = 20;
  categories = ["general","business","sports","science","technology","health",];

  ngOnInit(): void {
    this.headLines$ = this.store.select(getHeadlines).pipe(
      takeUntil(this.unsubscribe$)
    );

    this.headLines$.subscribe(headlines => {
      this.headLines = headlines.articles;
      this.totalResults = headlines.totalResults;
      this.category = headlines.category;
      this.country = headlines.country;
      this.pageIndex = headlines.pageIndex
      this.pageSize = headlines.pageSize
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadHeadlines(country: string, category: string, pageIndex: number, pageSize: number): void {
    this.store.dispatch(loadHeadlines({ country, category, pageIndex, pageSize }));
  }

  onCountryChange(): void {
    this.pageIndex = 0;
    this.store.dispatch(setCountry({country: this.country}));
    this.loadHeadlines(this.country, this.category, this.pageIndex, this.pageSize);
  }

  onCategoryChange(category: string): void {
    this.category = category;
    this.pageIndex = 0;
    this.store.dispatch(setCategory({ category }));
    this.loadHeadlines(this.country, this.category, this.pageIndex, this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadHeadlines(this.country, this.category, this.pageIndex, this.pageSize);
  }
}
