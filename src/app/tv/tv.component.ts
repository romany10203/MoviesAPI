import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
   tvshows:any[]=[];
   langs:any[]=[];
   currentPage!:number;
   currentLang!:string;
  constructor(private tvs:TvService) { }

  ngOnInit(): void {
     this.tvs.getTvShows().subscribe({next:(tvData)=>{
       this.tvshows=tvData.results
       
     }});

     this.tvs.getLangs().subscribe(data=>{
      this.langs=data;
    });
    this.currentLang=this.tvs.lang;
  }

  changePage(pageData:PageEvent):void{
    this.currentPage=pageData.pageIndex+1;
    this.tvs.getTvShows(this.currentPage).subscribe(data=>{
      this.tvshows=data.results;
    })
  }

  changeLang(e:any):void{
    this.currentLang=e.target.value;
    this.tvs.lang=e.target.value;
    this.tvs.getTvShows().subscribe(data=>{
      this.tvshows=data.results
      
    });
  }

}
