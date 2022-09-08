import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';
import { Imovie } from '../single-movie/movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  //dependancy injection
  movies: Imovie[] = [];
  isDisable: boolean = false;
  private _searchValue: string = '';
  filterdMovie: any[] = [];
  allData:any[]=[];
  currentPage!:number;
  currentLang!:string;
  langs:any[]=[];
  constructor(private movs: MoviesService) {}

  ngOnInit(): void {
    this.movs.getMovies(this.currentPage).subscribe({
      next: (moviesData) => {        
        this.allData = moviesData;
        this.movies = moviesData.results;
        this.filterdMovie = this.movies;
      },
    });

    this.movs.getLangs().subscribe(data=>{
      this.langs=data;
    });
    this.currentLang=this.movs.lang;

  }
  
  set searchvalue(val: string) {
    this._searchValue = val;
    this.searchMovies(val);
  }

  searchMovies(value: string) {
    this.movs.searchMovies(value).subscribe({
      next: (searchval) => {
        console.log(searchval.results);
        this.filterdMovie=searchval.results;
      },
    });
    // return this.movies.filter((mov) => {
    //   return mov.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    // });
  }

  changePage(pageData:PageEvent){
    this.currentPage=pageData.pageIndex+1;
    this.movs.getMovies(this.currentPage).subscribe({
      next: (moviesData) => {
        this.movies = moviesData.results;
        this.filterdMovie = this.movies; 
      },
    });
  }

  changeLang(e:any):void{
    this.currentLang=e.target.value;
    this.movs.lang=e.target.value;
    this.movs.getMovies().subscribe(data=>{
      this.movies = data.results;
      this.filterdMovie = this.movies;      
    });
  }


}
