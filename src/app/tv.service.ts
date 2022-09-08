import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  lang:string="en";
  apiKey: string = '5caa732474e64cf609bba25ff127d08e';
  
  constructor(private http: HttpClient) { }

  getTvShows(pageNumber:number=1):Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=${this.lang}&page=${pageNumber}`)
  }

  getTvShow(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=${this.lang}`);
  }

  getLangs():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/configuration/languages?api_key=5caa732474e64cf609bba25ff127d08e`);
  }

}
