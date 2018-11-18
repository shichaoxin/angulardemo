import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService,Comment } from '../shared/data.service';



@Component({
  selector: 'app-lolo',
  templateUrl: './lolo.component.html',
  styleUrls: ['./lolo.component.css']
})


export class LoloComponent implements OnInit {
     Title:string;
     comments:any;
     Lolo:any;
     readonly:boolean=true;
     newRating:number=5;
     newComment:string="";
     ishidden:boolean=false;
  constructor(private routerInfo:ActivatedRoute,
             private dataSerivice:DataService) { }

  ngOnInit() {
      // this.Title = this.routerInfo.snapshot.params["title"];
      // 通过路由快照的方式
      let dataId:number = this.routerInfo.snapshot.params['dataId']
      this.Lolo = this.dataSerivice.getData(dataId);
      console.log(this.dataSerivice.getData(dataId));
      this.comments = this.dataSerivice.getCommentss(dataId);
  }
  newevent():void{
    let comment= new Comment(0,this.comments.id, new Date().toISOString(),"张三",this.newRating,this.newComment);
    this.comments.unshift(comment);
    this.newComment = null;
    this.ishidden=!this.ishidden;                                                                     
  }
}
