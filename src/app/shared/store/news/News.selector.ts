import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Articles, HeadLines, SaveNews, Sources } from "./News.model";

const getHeadlineState = createFeatureSelector<HeadLines>('headlines')   // what we gave in app.state as a name that we should mention ('headlines')
const getSourceState = createFeatureSelector<Sources>('sources') 
const getSourceHeadlineState = createFeatureSelector<HeadLines>('sourceHeadlines')
const getArticlesState = createFeatureSelector<Articles>('articles')
const getSavedNewsState = createFeatureSelector<SaveNews>('savedNews')

export const getHeadlines = createSelector(getHeadlineState,(state)=>{
    return state
})

export const getSourceHeadlines = createSelector(getSourceHeadlineState,(state)=>{
    return state
})

export const getSources = createSelector(getSourceState,(state)=>{
    return state
})

export const getArticles = createSelector(getArticlesState,(state)=>{
    return state
})

export const getSavedNews = createSelector(getSavedNewsState,(state)=>{
    return state
})