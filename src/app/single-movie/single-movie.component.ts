import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Imovie } from './movie';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css'],
})
export class SingleMovieComponent implements OnInit {

  movie!:Imovie;
  constructor(private movService:MoviesService,private route:ActivatedRoute) {}
  ngOnInit(): void {
      let id=Number(this.route.snapshot.paramMap.get('id'));
      this.movService.getMovieById(id).subscribe({next:(data)=>{
        this.movie=data;        
      }})
      
  }



  
}
