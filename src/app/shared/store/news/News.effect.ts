import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map, tap } from "rxjs";
import { LOAD_ARTICLES, LOAD_HEADLINES,SOURCE,SOURCE_HEADLINES,loadArticleSuccess,loadHeadlineSuccess, loadSavedArticleSucceess, loadSavedArticles, loadSavedHeadlineSucceess, loadSavedHeadlines, loadSourceHeadlineSucces, loadSourcesSuccess} from "./News.action";
import { HeadlinesService } from "../../../services/headlines.service";
import { NewzServiceService } from "../../../services/newz-service.service";

@Injectable()
export class NewzEffect{

    constructor(
        private action$: Actions,
        private HeadlineService: HeadlinesService,
        private articleService: NewzServiceService
    ){}

    _headlines = createEffect(()=>{
        
        return this.action$.pipe(
            ofType(LOAD_HEADLINES),
            exhaustMap((action:any)=>{
                return this.HeadlineService.getHeadlines(action.country, action.category, action.pageIndex, action.pageSize).pipe(
                    map((data)=>
                        loadHeadlineSuccess({headlines:data})
                    ),
                    catchError(()=>EMPTY)
                )
            })
        )
    })

    _sourceHeadlines = createEffect(()=>{
        return this.action$.pipe(
            ofType(SOURCE_HEADLINES),
            exhaustMap((action:any)=>{
                return this.HeadlineService.getNewzHeadlinesBySource(action.sources,action.pageIndex,action.pageSize).pipe(
                    map((data)=>
                        loadSourceHeadlineSucces({headlines:data})
                    ),
                    catchError(()=>EMPTY)
                )
            })
        )
    })

    _sources = createEffect(()=>{
        return this.action$.pipe(
            ofType(SOURCE),
            exhaustMap(()=>{
                return this.HeadlineService.getAllSources().pipe(
                    map((data)=>
                        loadSourcesSuccess({sources:data})
                    ),
                    catchError(()=>EMPTY)
                )
            })
        )
    })
    _articles = createEffect(()=>{
        return this.action$.pipe(
            ofType(LOAD_ARTICLES),
            exhaustMap((action:any)=>{
                return this.articleService.getArticles(action.query,action.sortBy,action.language,action.domains,action.pageSize,action.pageIndex).pipe(
                    map((data)=>
                        loadArticleSuccess({articles:data})
                    ),
                    catchError(()=>EMPTY)
                )
            })
        )

    })

    _getsavedHeadlines = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadSavedHeadlines),
            exhaustMap((action:any)=>{
                return this.HeadlineService.getSavedHeadlines().pipe(
                    map((data)=>
                        loadSavedHeadlineSucceess({headlines:data})
                    )
                )
            })
        )
    })

    _getsavedArticles = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadSavedArticles),
            exhaustMap((action:any)=>{
                return this.articleService.getSavedArticles().pipe(
                    map((data)=>
                        loadSavedArticleSucceess({articles:data})
                    ),
                )
            })
        )
    })

}