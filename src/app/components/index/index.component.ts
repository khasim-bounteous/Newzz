import { Component, OnInit } from '@angular/core';
import { Articles, HeadLines, SourceModel } from '../../shared/store/news/News.model';
import { Store } from '@ngrx/store';
import { loadArticles, loadHeadlines, loadSavedArticles, loadSavedHeadlines, loadSourceHeadlines, loadSources } from '../../shared/store/news/News.action';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {

  constructor(
    private  store: Store<{headline:HeadLines,articles:Articles,sources: SourceModel[]}>,
  ){}

  ngOnInit(): void { 
    console.log("indexxxxxxxxxxx")
    this.store.dispatch(loadHeadlines({country:"in",category:"general",pageIndex: 0,pageSize: 20}));
    this.store.dispatch(loadArticles({query:'india' as string,sortBy: 'popularity',language: 'en',domains:'',pageSize:20,pageIndex:0}));
    this.store.dispatch(loadSources());
    this.store.dispatch(loadSourceHeadlines({ sources: ["bbc-news","abc-news"],pageSize:20,pageIndex:0 }));
    this.store.dispatch(loadSavedHeadlines())
    this.store.dispatch(loadSavedArticles())
  }
}
