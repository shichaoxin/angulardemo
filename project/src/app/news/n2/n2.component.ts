import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { SourveService } from '../../shared/sourve.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-n2',
  templateUrl: './n2.component.html',
  styleUrls: ['./n2.component.css']
})
export class N2Component implements OnInit {
   buybook:any;
   isVisible = false;
  constructor(private libs:DataService,
              public  all:SourveService,
              private  message:NzMessageService) { }

  ngOnInit() {
   this.buybook=this.libs.getBuylib();
   console.log(this.buybook);

  }

  showModal(): void {

    this.isVisible = true;
   

  }
  handleOk(): void {
    this.isVisible = false;
    this.message.info('支付成功',{nzDuration:1000});


  }
  handleCancel(): void {

    this.isVisible = false;
  }


  Notbuy(index,i){
    this.buybook.splice(i,1);
    console.log(i);
    this.all.Allmoney-=index.price;
    console.log(this.all.Allmoney); 
}
  Nothing():void{
    this.buybook.splice(0,this.buybook.length);
    this.all.Allmoney=0;
    if(this.all.Allmoney==0){
      this.message.info('空空如也',{nzDuration: 1000})
    }
  }
  Countmoney():void{

  }
}
