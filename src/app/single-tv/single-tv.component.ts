import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-single-tv',
  templateUrl: './single-tv.component.html',
  styleUrls: ['./single-tv.component.css']
})
export class SingleTvComponent implements OnInit {
  tvShow:any;
  constructor(private _TvService:TvService,private _ActivatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    let id=Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    this._TvService.getTvShow(id).subscribe(data=>{
      this.tvShow=data;
    });
  }
}
