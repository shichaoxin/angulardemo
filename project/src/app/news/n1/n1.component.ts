import { Component, OnInit } from '@angular/core';
import { DataService,Buylib,Buylibs} from '../../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { SourveService } from '../../shared/sourve.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-n1',
  templateUrl: './n1.component.html',
  styleUrls: ['./n1.component.css']
})
export class N1Component implements OnInit {
  lib:any;
  buylib:any;
  isVisible = false;
  buylibs:any;
  public time1: Date = new Date();
  constructor( private libserive:DataService,
               private routerInfo:ActivatedRoute,
               private all:SourveService,
               private message: NzMessageService) { }
   
    showModal(index): void {
       
      this.isVisible = true;
      console.log(index.id);
      let data = new Buylibs(index.id,index.author,index.name,index.instru);
      this.buylibs.push(data);

    }
  
    handleOk(): void {
      this.isVisible = false;
      this.buylibs.pop();
    }
  
    handleCancel(): void {
      this.buylibs.pop();
      this.isVisible = false;
    }



  ngOnInit() {
    this.lib = this.libserive.getLib();
    this.buylib = this.libserive.getBuylib();
    this.buylibs = this.libserive.getBuylibs();
  
    console.log(this.lib);   
  }
  buybook(index):void{
      index.time = this.time1;

     let data = new Buylib(index.id,index.picter,index.author,index.name,index.price,index.instru,index.time);
     this.buylib.push(data);
     this.all.Allmoney+=index.price;
     if(this.all.Allmoney>66){ 
      this.message.info('消费太多了',{nzDuration: 2000}); 
     }
  }

}
