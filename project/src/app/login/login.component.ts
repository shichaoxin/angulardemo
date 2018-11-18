import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import  { Router } from '@angular/router'
import { LocalStorage } from '../shared/local.storage';
import { HttpClient,HttpHeaders } from '@angular/common/http' 
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public  cache;
   public username="";
   public password="";
  validateForm: FormGroup;
  home():void{  
    // this.router.navigate(['home/animations']);   
          //路由链接
   if(this.username == 'shichaoxin' && this.password =='123456'){
      this.router.navigate(['./home/animations'])
   }
   else {
     return
   }
  }
 
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  if (this.validateForm.valid){
  const { userName,password } = this.validateForm.getRawValue();
 
//http  post请求
  //  let header : HttpHeaders;        //定义请求的头
  //  header = new HttpHeaders();
  //  header.append ("Content-Type","application/json");
  //  this.htttp.post('http://IP',{            //异步请求（异步编程）
  //     loginName:userName,               //向服务器发送用户信息
  //     passWord:password,
  //  },{headers:header}).subscribe(
  //    (val)=>{
  //      const data = JSON.parse(JSON.stringify(val));   //拿到用户的信息
  //      this.cache = data.userInfo;          //请求成功后保存数据到local storage
  //      this.set();
  //    },
  //    respone=>{
  //      console.log("no");   
  //    },
  //    ()=>{
  //      console.log('ok'); 
  //       this.router.navigate(['home']);       //请求成功路由链接到home
  //    }
  //   )
    }
  }
  constructor(
    private router:Router,
    private fb: FormBuilder,
    private htttp:HttpClient,
    private ls:LocalStorage){}
    get():void{
      this.cache = this.ls.getObject('username')
    }
    set():void{
      this.ls.setObject('username',this.cache);
    }
  ngOnInit(): void {
    this.validateForm = this.fb.group({         //响应式表单验证
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ false ]
    });
   
  }
}
