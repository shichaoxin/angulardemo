import { Component, OnInit,Output, Input} from '@angular/core';
import { DataService,Data,Shopping} from '../shared/data.service';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {

     shoping:any;
     datas:any;
     id:any;title:any;price:any;rating:number=3;desc:any;
     iscolor:boolean=true;
     keyword:string;
     search:FormControl = new FormControl();    //定义响应式表单
     formModel:FormGroup;
  constructor(private  dataSerivice:DataService,
              private message: NzMessageService) { 

              this.search.valueChanges          //通过流的方式把获取的value传给keyword
     .subscribe(
       (value=>this.keyword = value)
     );
     let fb = new FormBuilder();
     this.formModel = fb.group({    //响应式表单的自检
       id:['',],
       title:[],
       price:[],
       desc:[]
     })
  }

  ngOnInit(){  
//获取从服务拿到的数据依赖注入   this.datas= this.dataSerivice.getDatas()
    this.datas= this.dataSerivice.getDatas();
    this.shoping = this.dataSerivice.getShopping();
    console.log(this.datas);   
  }
  delete(index):void{
  index.iscolor1= '购买成功';
  index.iscolor = false;
  let shoping = new Shopping(index.id,index.title,index.price,0);
  this.shoping.push(shoping);   //把数组放在shopping中
   console.log(shoping);
   this.message.info('购买成功',{nzDuration: 800}); 
  } 
  addstoer():void{ 
   
     if(this.id==null && this.title==null && this.price==null){
      this.message.info('请输入字段',{nzDuration: 800});
       return;
     }

      let data = new Data(this.id,this.title,this.price,this.desc,this.rating,'买',true);
      this.datas.push(data);
      console.log(this.datas);
      
  }
  delete1(i):void{
      this.datas.splice(i,1);
  }
}
