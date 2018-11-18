import { Injectable } from '@angular/core';
import { getSupportedInputTypes } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private sports:Sport[]=[
    new Sport(1,"长跑","南大门操场",20,"2018-09-10",false,false),
  
    new Sport(2,"乒乓","东大门操场",10,"2018-09-11",false,false),
    new Sport(3,"篮球","西大门操场",15,"2018-09-12",false,false),
    new Sport(4,"羽毛球","北大门操场",30,"2018-09-13",false,false),
    new Sport(5,"网球","中心操场",14,"2018-09-14",false,false),
]
private lists:List[]=[
]
getSports(){
  return this.sports;
}
getLists(){
  return this.lists;
}
  constructor() { }
}
export class Sport{
  constructor(private id:number,
              private name:string,
              private place:string,
              private num:number,
              private time:string,
              private choose:boolean,
              private choose1:boolean,){
  }
}
export class List{
  constructor(private id:number,
              private  name:string,
              private  sportname:string,
              private  sportplace:string,
              private  sporttime:string, ){
    
  }
}