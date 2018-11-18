import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../shared/local.storage';
import { SourveService } from '../../shared/sourve.service';

@Component({
  selector: 'app-n4',
  templateUrl: './n4.component.html',
  styleUrls: ['./n4.component.css']
})
export class N4Component implements OnInit {
    userinfo:any;
    cache:any;
    public current:Date = new Date();
    effect = 'scrollx';
    array = ['支付宝','微信支付','银联支付','招商支付'];
    constructor(private data:SourveService,
               private ls:LocalStorage,
              ) { 
                window.setInterval(()=>{
                  this.current = new Date();
                },1000)
}

ngOnInit() {
   console.log(  this.current);
   (this.current)
    this.userinfo = this.data.getInfo();
    console.log(this.userinfo);
    this.cache = this.ls.getObject('username');//拿到登陆时刻的用户值
    setTimeout(() => {
      this.effect = 'fade';
    }, 3000);
   }


}
