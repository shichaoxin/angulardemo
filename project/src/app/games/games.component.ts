import { Component, OnInit } from '@angular/core';
import { MovieService, List, Sport } from '../shared/movie.service';
import { SourveService } from '../shared/sourve.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public data;
  public datas;
  public listss:any;
  public names=[];
  public  cache;
  constructor(private serive:MovieService,
             private source:SourveService,
             private htttp:HttpClient
            
            ) { }
  choose(index):void{         //选择活动，并把数据返回到服务中。
     index.choose = true;
     index.choose1= false;
     let list = new List(this.names[0].name,index.id,index.name,index.place,index.time);
     let lists = new Sport(index.id,index.name,index.place,index.num--,index.time,index.choose,index.choose1)
     this.listss.push(list);  
  }
  notchoose(index):void{
    index.choose = false;
    index.chooe1 = true;
    let lists = new Sport(index.id,index.name,index.place,index.num++,index.time,index.choose,index.choose1)
    
    this.listss.pop(index.id,1);  
    alert( this.listss.pop(index.id,1))
  }
  Submit(index):void{
     let id = this.cache.id;
     let sportid = index.id;
     let sportname = index.name;

    let header : HttpHeaders;        //定义请求的头
    header = new HttpHeaders();
    header.append ("Content-Type","application/json");
    this.htttp.post('http://IP',{ 
      userid : id,           //异步请求（异步编程）
      sportid:sportid,
      sportname:sportname                    //向服务器发送用户信息 
    },{headers:header}).subscribe(
      (val)=>{
        const data = JSON.parse(JSON.stringify(val));   //拿到用户的信息 
      },
      respone=>{
        console.log("ok");   
      },
      ()=>{
        console.log('no');
    }
   )
  }

  ngOnInit() {
    this.listss = this.serive.getLists();
    this.data = this.serive.getSports();
    this.names = this.source.getInfo();
   
    console.log(this.names[0].name);
    console.log(this.data.id);
    
    console.log(this.data);
    
  }

}
