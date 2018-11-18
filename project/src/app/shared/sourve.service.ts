import { Injectable } from '@angular/core';
import { MusicComponent } from '../music/music.component';

@Injectable({
  providedIn: 'root'
})
export class SourveService {
   public  Allmoney:number = 0; 
   private userinfo:Info[]=[
        new Info('石朝新',12897711191,'湖北省武汉市光谷区')
   ];
   private days:Day[]=[
      
   ]
   private timess:Time[]=[
    
  ]
  private musics:Musicc[]=[

  ];
   public music=[
   {songname:'That girl',song:'deuxl',songlist:'that girl is beautiful',address:'./assets/music/1.mp3'},
   {songname:'吻别',song:'张学友',songlist:'that girl  beautiful',address:'./assets/music/1.mp3'},
   {songname:'天意',song:'刘德华',songlist:'that is beautiful',address:'./assets/music/1.mp3'},
   {songname:'明天过后',song:'张杰',songlist:'that girl isul',address:'./assets/music/1.mp3'},
   {songname:'爱一点',song:'王力宏',songlist:' girl is beautiful',address:'./assets/music/1.mp3'}
  ]
   constructor() { }
   getMusic(){
     return this.music;
   }
   getMusicc(){
     return this.musics;
   }
    getInfo(){
      return this.userinfo;
    }
    getDay(){
      return this.days;
    }
    getTime(){
      return this.timess;
  }


}

export class Info{
  constructor(public  name:string,
              public  phone:number,
              public  address:string){}
}
export class Day{
  constructor(private day:number){}
}
export  class Time{
  constructor(private  uptime:Time,
              private  downtime:Time,
              private  state:string,
              private  statas:string,
              private  lose:number,
              private  early:number){}
}
export class   Musicc{
  constructor(private  songname:string,
              private  name:string,
              private  songlist:string,
               ){}
}
