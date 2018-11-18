import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SourveService, Time } from '../../shared/sourve.service';



@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.css']
})
export class M2Component implements OnInit {
   public up="上班打卡";
   public down="打卡结束";
   public data:any;
   public timess:any;
   public current:Date = new  Date();
   public time1: Date = new Date();
   public Stoptime;
   public time = new Date().getHours();//用来比较时间
   public c=1;
   public n=0;
   public m=0;
   public i=0;
   public Stoptime1;
   constructor(private message: NzMessageService,
               private  datas:SourveService) { }
   stop():void{
     this.c++;
     if(this.c==2 && this.time<9){
          this.message.info('打卡成功',{nzDuration:800});   
          this.Stoptime = this.time1; 
          this.Stoptime1 = this.time1;
          this.up="下班打卡" ;
          this.down="";
          let time = new Time(this.Stoptime,this.Stoptime1,this.up,this.down,0,0);
          this.timess.push(time);
          // this.timess = this.datas.getTime();
          console.log(this.timess);
          return;
    }
    else if(this.c==2 && this.time>=9){
            this.message.info('今天迟到了',{nzDuration:2000});   
            this.Stoptime = this.time1; 
            this.up="下班打卡"; 
            this.n++;
            this.down="";
            let time = new Time(this.Stoptime,this.Stoptime1,this.up,this.down,this.n,0);
            this.timess.push(time);
            console.log('-----------'+this.timess);  
            return;  
   }
    
     else if(this.c==3&&this.time>=12&&this.time<18){
          this.message.info('今天早退了',{nzDuration:2000});  
          this.Stoptime1 = this.time1;
          this.m++;
          this.up="";
          this.down="打卡结束";
          let time = new Time(this.Stoptime,this.Stoptime1,this.up,this.down,0,this.m);
          this.timess.push(time);
          console.log('-----------'+this.timess); 
          return; 
     }
     else if(this.c==3&&this.time>=18){
          this.message.info('打卡成功',{nzDuration:800});
          this.Stoptime1 = this.time1; 
          this.up="";
          this.down="打卡结束";
          let time = new Time(this.Stoptime,this.Stoptime1,this.up,this.down,0,0);
          this.timess.push(time);
          console.log('-----------'+this.timess);
          return;  
       }
     
     this.timess = this.datas.getTime();
     console.log(this.timess);
   }
 
ngOnInit() {
    window.setInterval(()=>{
         this.time1 = new Date();
    },1000);
      this.data = this.datas.getInfo();
      console.log(this.data);
      this.timess = this.datas.getTime();
      console.log(this.timess);
     
  }

}
