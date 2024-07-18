import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ArticleModel, Articles, HeadlineModel } from '../shared/store/news/News.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewzServiceService {

  constructor(
    private http: HttpClient
  ) { }

  
  getArticles(query:string,sortBy:string,language:string,domains:string,pageSize:number,pageIndex:number):Observable<Articles>{
    console.log("get articles")
    const params = new HttpParams()
      .set('q',query)
      .set('sortBy',sortBy)
      .set('language',language)
      .set('domains',domains)
      .set('pageSize', pageSize.toString())
      .set('page', (pageIndex + 1).toString())
      .set('apiKey',environment.API_KEY)

    return this.http.get<Articles>(`${environment.apiEndPointNewz}`,{params})
  }

  saveArtcile(article:ArticleModel):Observable<ArticleModel>{
    return this.http.post<ArticleModel>('http://localhost:3000/savedArticles',article)
  }

  getSavedArticles():Observable<ArticleModel[]>{
    return this.http.get<ArticleModel[]>('http://localhost:3000/savedArticles')
  }

  deleteSavedArticle(id:string){
    return this.http.delete(`http://localhost:3000/savedArticles/${id}`)
  }
  
}
