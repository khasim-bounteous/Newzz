import { createReducer, on } from "@ngrx/store";
import { ArticleState, HeadLinestate, SaveNewsState, SourceHeadlineState, SourceState } from "./News.state";
import { loadArticles, loadArticleSuccess, loadHeadlines, loadHeadlineSuccess, loadSavedArticleSucceess, loadSavedHeadlines, loadSavedHeadlineSucceess, loadSourceHeadlines, loadSourceHeadlineSucces, loadSources, loadSourcesSuccess, setCategory, setCountry, setLanguage, setSelectedSources} from "./News.action";
import { state } from "@angular/animations";

const _headlineReducer = createReducer(
    HeadLinestate,
    on(loadHeadlineSuccess, (state, action) => {
      return {
        ...state,
        status: action.headlines.status,
        totalResults: action.headlines.totalResults,
        articles: action.headlines.articles
      }
    }),
    on(loadHeadlines, (state, action) => {
      return {
        ...state,
        country: action.country,
        category: action.category,
        pageIndex: action.pageIndex,
        pageSize: action.pageSize
      }
    }),
);

const _saveNewsReducer = createReducer(
    SaveNewsState,
    on(loadSavedHeadlineSucceess,(state,action)=>{
        return {
            ...state,
            headlines: action.headlines,
        }
    }),
    on(loadSavedArticleSucceess,(state,action)=>{
        return {
            ...state,
            articles: action.articles,
        }
    })
)

const _sourceHeadlineReducer = createReducer(

    SourceHeadlineState,
    on(loadSourceHeadlineSucces,(state,action)=>{
        return {
            ...state,
            status: action.headlines.status,
            totalResults: action.headlines.totalResults,
            articles: action.headlines.articles
        }
    }),
    on(loadSourceHeadlines,(state,action)=>{
        return{
            ...state,
            pageIndex:action.pageIndex,
            pageSize: action.pageSize,
        }
    })
    
)

const _sourceReducer = createReducer(
    SourceState,
    on(loadSourcesSuccess,(state,action)=>{
        return{
            ...state,
            status: action.sources.status,
            sources: action.sources.sources,
        }
    }),
    on(setLanguage,(state,action)=>{
        return {
            ...state,
            language: action.language
        }
    }),
    on(setSelectedSources,(state,action)=>{
        return {
            ...state,
            selectedSources: action.selectedSources
        }
    }),
)

const _articlesReducer = createReducer(
    ArticleState,
    on(loadArticleSuccess,(state,action)=>{
        return{
           ...state,
            status: action.articles.status,
            totalResults:action.articles.totalResults,
            articles: action.articles.articles,
        }
    }),
    on(loadArticles,(state,action)=>{
        return {
            ...state,
            language: action.language,
            query: action.query,
            sortBy: action.sortBy,
            pageIndex: action.pageIndex,
            pageSize: action.pageSize,
        }
    })
)

export function headlineReducer(state: any,action:any){
    return _headlineReducer(state,action)
}

export function sourceReducer(state: any,action:any){
    return _sourceReducer(state,action)
}

export function articlesReducer(state: any,action:any){
    return _articlesReducer(state,action)
}

export function sourceHeadlineReducer(state: any,action:any){
    return _sourceHeadlineReducer(state,action)
}
export function savedNewsReducer(state: any,action:any){
    return _saveNewsReducer(state,action)
}