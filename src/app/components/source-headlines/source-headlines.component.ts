import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeadlineModel, HeadLines, SourceModel } from '../../shared/store/news/News.model';
import { loadSourceHeadlines, loadSources, setLanguage, setSelectedSources } from '../../shared/store/news/News.action';
import { getHeadlines, getSourceHeadlines, getSources } from '../../shared/store/news/News.selector';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-source-headlines',
  templateUrl: './source-headlines.component.html',
  styleUrls: ['./source-headlines.component.scss']
})
export class SourceHeadlinesComponent implements OnInit, OnDestroy {

  sources: SourceModel[] = [];
  totalResults!: number;
  filteredSources: SourceModel[] = [];
  selectedSources: string[] = ['bbc-news'];
  headLines: HeadlineModel[] = [];
  languages: string[] = [];
  selectedLanguage: string  = 'en';
  pageIndex = 0
  pageSize = 20

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<{ headlines: HeadLines; sources: SourceModel[] }>) {}

  ngOnInit(): void {
    this.store.select(getSources).pipe(takeUntil(this.unsubscribe$)).subscribe((items) => {
      this.sources = items.sources;
      this.selectedLanguage  = items.language
      this.selectedSources = items.selectedSources
      this.languages = [...new Set(items.sources.map(source => source.language))];
      this.filteredSources = this.sources.filter(source => source.language === this.selectedLanguage);
    });
    this.store.select(getSourceHeadlines).pipe(takeUntil(this.unsubscribe$)).subscribe((items) => {
      this.headLines = items.articles;
      this.totalResults = items.totalResults
      this.pageIndex = items.pageIndex,
      this.pageSize = items.pageSize
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadHeadlines(): void {
    this.store.dispatch(loadSourceHeadlines({ sources: this.selectedSources,pageIndex:this.pageIndex,pageSize:this.pageSize }));
  }

  onLanguageChange(): void {
    this.store.dispatch(setLanguage({language: this.selectedLanguage}));
    if (this.selectedLanguage) {
      this.filteredSources = this.sources.filter(source => source.language === this.selectedLanguage);
    } else {
      this.filteredSources = this.sources;
    }
    this.selectedSources = [];
  }

  onSourceChange(): void {
    this.store.dispatch(setSelectedSources({selectedSources: this.selectedSources}));
    this.loadHeadlines();
  }

  onPageChange(event: PageEvent){
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.loadHeadlines()
  }
}
