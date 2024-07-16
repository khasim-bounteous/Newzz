import { articlesReducer, headlineReducer, savedNewsReducer, sourceHeadlineReducer, sourceReducer } from "../store/news/News.reducer";
export const AppState = {
    headlines: headlineReducer,
    sources: sourceReducer,
    articles: articlesReducer,
    sourceHeadlines: sourceHeadlineReducer,
    savedNews: savedNewsReducer
}