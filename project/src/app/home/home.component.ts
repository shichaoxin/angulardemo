import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../shared/local.storage';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { patch } from 'webdriver-js-extender';
// import { en_US, NzI18nService } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';

import { TranslateService } from "@ngx-translate/core";

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cache:any;
  list:any;
  public c=false;
  constructor(private router:Router,
            private  htttp:HttpClient,
            private ls:LocalStorage,
            private translateService: TranslateService) {        
  }
  clickSwitch() {
   this.c=!this.c;
 if(this.c==true){           //第一次切换时候是中文的形式
   
     this.translateService.addLangs(["zh","en"]);      //在服务里是用到的是中英文的形式
     this.translateService.setDefaultLang("en");
     const browserLang = this.translateService.getBrowserLang();
     this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'en');  //选择语言的形式
} 
 else if(this.c==false){

  this.translateService.addLangs(["zh", "en"]);
  // 设置默认语言，一般无法匹配的时候使用
this.translateService.setDefaultLang("zh");
const browserLang = this.translateService.getBrowserLang();
this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
return;
}
 
}

  set():void{
    this.ls.setObject('username',this.cache)
  }
  login():void{
    this.router.navigate(['login']);
  }

  ngOnInit() {
     
    
     this.cache = this.ls.getObject('username');
     let header : HttpHeaders;
     header = new HttpHeaders();
     header.append ("Content-Type","application/json");
      var client = this.htttp.get('http://IP?id='+this.cache.id,{headers:header}).subscribe(
       (val)=>{
         const data = JSON.parse(JSON.stringify(val));
         this.list = data;
  },
  response=>{
    console.log('success');
    
  },
  ()=>{
    console.log('error');
    
   }
  );
  }
}
// patch 传参数
// this.htttp.patch('IP?newPassWord='+this.newPassWord + &oldPaaWord='this.oldPassWord' + &id='this.cache.id' + &conformPassword='this.conformPassword')