import { createAction, props } from "@ngrx/store";
import { ArticleModel, Articles, HeadlineModel, HeadLines,SourceModel,Sources} from "./News.model";

export const LOAD_HEADLINES = '[headline page] load headlines'
export const LOAD_HEADLINES_SUCCESS = '[headline page] load headlines success'
export const SOURCE_HEADLINES = '[headline page] load source headlines'
export const SOURCE_HEADLINES_SUCCESS = '[headline page] load source headlines success'
export const SOURCE = '[source page] load source'
export const SOURCE_SUCCESSS = '[source page] load source success'
export const LOAD_ARTICLES = '[articles page] load articles'
export const LOAD_ARTICLES_SUCCESS = '[articles page] load articles success'
export const SET_LANGUAGE = '[source page] set language'
export const SET_SELECTED_SOURCES = '[source page] set selected sources'
export const SET_COUNTRY = 'in'
export const SET_CATEGORY = 'general'
export const LOAD_SAVED_HEADLINES = '[saved headlines page] load saved headlines'
export const LOAD_SAVED_HEADLINES_SUCCESS = '[saved headlines page] load saved headlines success'
export const LOAD_SAVED_ARTICLES = '[saved articles page] load saved headlines'
export const LOAD_SAVED_ARTICLE_SUCCESS = '[saved article page] load saved headlines success'
export const SAVE_HEADLINE = '[save headlines] save headlines'
export const SAVE_HEADLINE_SUCCESS = '[save headlines] save headlines success'

export const loadHeadlines = createAction(LOAD_HEADLINES, props<{ country: string, category: string, pageIndex: number, pageSize: number }>());
export const loadHeadlineSuccess = createAction(LOAD_HEADLINES_SUCCESS, props<{ headlines: HeadLines }>());


export const loadSourceHeadlines = createAction(SOURCE_HEADLINES,props<{sources:string[],pageIndex: number, pageSize: number }>())
export const loadSourceHeadlineSucces = createAction(SOURCE_HEADLINES_SUCCESS,props<{headlines: HeadLines}>())

export const loadSources = createAction(SOURCE)
export const loadSourcesSuccess = createAction(SOURCE_SUCCESSS,props<{sources:Sources}>())

export const loadArticles = createAction(LOAD_ARTICLES,props<{query:string,sortBy:string,language:string,domains:string,pageSize:number,pageIndex:number}>())
export const loadArticleSuccess = createAction(LOAD_ARTICLES_SUCCESS,props<{articles: Articles}>())

export const setLanguage = createAction(SET_LANGUAGE,props<{language:string}>())
export const setSelectedSources = createAction(SET_SELECTED_SOURCES,props<{selectedSources:string[]}>())

export const setCountry = createAction(SET_COUNTRY,props<{country:string}>())
export const setCategory = createAction(SET_CATEGORY,props<{category:string}>())

export const loadSavedHeadlines = createAction(LOAD_SAVED_HEADLINES)
export const loadSavedHeadlineSucceess = createAction(LOAD_SAVED_HEADLINES_SUCCESS,props<{headlines: HeadlineModel[]}>())

export const loadSavedArticles = createAction(LOAD_SAVED_ARTICLES)
export const loadSavedArticleSucceess = createAction(LOAD_SAVED_ARTICLE_SUCCESS,props<{articles: ArticleModel[]}>())

export const saveHeadline = createAction(SAVE_HEADLINE,props<{headine:HeadlineModel[]}>)
export const saveHeadlineSucceess = createAction(SAVE_HEADLINE,props<{headline: HeadlineModel}>)