import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ArticleModel, HeadlineModel, SaveNews, SourceModel, Sources } from '../shared/store/news/News.model';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {

  constructor(
    private http: HttpClient
  ) { }

  //********top headlines by country***********
  getHeadlines(country: string, category: string, pageIndex: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('country', country)
      .set('category', category)
      .set('pageSize', pageSize.toString())
      .set('page', (pageIndex + 1).toString())
      .set('apiKey',environment.API_KEY)
    console.log("news headlines")
    return this.http.get(`${environment.apiEndPointHeadlines}`, { params });
    // return this.http.get<Sources>("http://localhost:3000/headLines")
  }


  getNewzHeadlinesBySource(sources: SourceModel[],pageIndex:number,pageSize:number):Observable<any>{
    const sourcesParam = sources.join(',');
    const params = new HttpParams()
      .set('sources', sourcesParam)
      .set('pageSize', pageSize.toString())
      .set('page', (pageIndex + 1).toString())
      .set('apiKey',environment.API_KEY)
    
    return this.http.get(`${environment.apiEndPointHeadlines}`,{params});
  }

  getAllSources():Observable<Sources>{
    console.log("all sources")
    return this.http.get<Sources>("http://localhost:3000/sources")
  }

  getSavedHeadlines():Observable<HeadlineModel[]>{
    
    return this.http.get<HeadlineModel[]>('http://localhost:3000/savedHeadlines')
  }
  

  saveHeadline(headline:HeadlineModel){
    return this.http.post('http://localhost:3000/savedHeadlines',headline).pipe(tap((data)=>console.log(data)))
  }

  deleteSavedHeadline(id:string){
    return this.http.delete(`http://localhost:3000/savedHeadlines/${id}`)
  }

}
