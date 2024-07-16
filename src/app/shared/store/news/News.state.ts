import { Articles, HeadLines, SaveNews, SourceHeadlines, Sources } from "./News.model";

export const HeadLinestate: HeadLines = {
    country: 'in',
    category: 'general',
    status: '',
    totalResults: 0,
    articles: [],
    pageSize: 20,
    pageIndex: 0
}

export const SourceHeadlineState:SourceHeadlines = {
    status: '',
    totalResults: 0,
    articles: []
}

export const SourceState: Sources = {
    status: '',
    sources: [],
    selectedSources: ['bbc-news','abc-news'],
    language: 'en',
    pageSize: 20,
    pageIndex: 0
}

export const ArticleState: Articles = {
    status: '',
    totalResults: 0,
    articles: [],
    query: 'cricket',
    sortBy: 'publishedAt',
    language: 'en',
    pageSize: 20,
    pageIndex: 0
}

export const SaveNewsState: SaveNews = {
    headlines: [],
    articles: []
}
