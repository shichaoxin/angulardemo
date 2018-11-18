import { Injectable } from '@angular/core';
import { Time } from './sourve.service';
// import { ENGINE_METHOD_CIPHERS } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private datas:Data[]=[
        new Data(1,"空调",3000,"不错",4,'买',true),
        new Data(2,"电视",3230,"不错的",3,'买',true),
        new Data(3,"冰箱",3450,"不错得的",2,'买',true),
        new Data(4,"水果",3560,"不错得得得",4,'买',true),
        new Data(5,"森林",7800,"不错得得得的",1,'买',true),
        new Data(6,"建筑",3800,"不错得得得得的",3,'买',true),
   ]
   private comments:Comment[]=[
    new Comment(1,1,"zhangsan","2017-10-05",4,"bucuo"),
     new Comment(1,2,"zhangsan","2017-10-05",4,"bucuo"),
     new Comment(2,2,"lisi","2017-10-25",1,"bucuo"),
     new Comment(3,3,"wanger","2017-01-05",2,"bucuo"),
     new Comment(4,3,"lizhang","2017-12-05",4,"bucuo"),
     new Comment(5,5,"xiaoming","2017-08-05",2,"bucuo"),
     new Comment(6,4,"xiaohong","2017-10-05",3,"bucuo")
   ]
  private shopping:Shopping[]=[
     
  ];
  private  buylib:Buylib[]=[

  ];
  private  buylibs:Buylibs[]=[

  ];
  private info:Info[]=[
    new Info(1,"张三",22,12345678912,"上海"),
    new Info(2,"里斯",22,12345678912,"北京"),
    new Info(3,"王二",22,12345678912,"武汉"),
    new Info(4,"张柳",22,12345678912,"深圳"),
    new Info(5,"李六",22,12345678912,"合肥"),
    new Info(6,"王三",22,12345678912,"昆明"),
    new Info(7,"张三",22,12345678912,"上海"),
    new Info(8,"里斯",22,12345678912,"北京"),
    new Info(9,"王二",22,12345678912,"武汉"),
    new Info(10,"张柳",22,12345678912,"深圳"),
    new Info(11,"李六",22,12345678912,"合肥"),
    new Info(12,"王三",22,12345678912,"昆明"),
  ]
  private lib:Lib[]=[
    new Lib(1,"nihao","施耐庵","水浒传",12,"不错不错不错不错不错不错不错不错不错不错"),
    new Lib(2,"nihao","吴承恩","西游记",23,"不错"),
    new Lib(3,"nihao","曹雪芹","红楼梦",11,"不错"),
    new Lib(4,"nihao","吴贯中","三国演义",15,"不错"),
    new Lib(5,"nihao","施耐庵","水浒传",44,"不错"),
    new Lib(6,"nihao","施耐庵","水浒传",66,"不错"),
   
  ]
  constructor() {}
//保存数据到服务中
  getDatas(){
     return this.datas;
  }
  getShopping(){
    return this.shopping;
  }
  getInfo(){
    return this.info;
  }
  getLib(){
    return this.lib;
  }
  getBuylib(){
    return this.buylib;
  }
  getBuylibs(){
    return this.buylibs;
  }
  getBookId(id:number):Lib{
    return this.lib.find((data)=> data.id==id);
  }
//获取数据的校对
  getData(id:number):Data{
    return this.datas.find((data)=> data.id==id);
  }
  getCommentss(id:number){
     return this.comments.filter((comment:Comment)=>comment.dataId==id)
  }
}
export class Data{
    constructor(public id:number,
      public title:string,
      public price:number,
      public desc:string,
      public rating:number,
       public iscolor1:string,
      public iscolor:boolean){
    }
}
export class Comment{
  constructor(public id:number,
              public dataId:number,
              public user:string,
              public time:string,
              public rating:number,
              public content:string){

  }
}
export class Shopping{
  constructor(
    public id:number,
    public title:string,
    public  price:number,
    public  allmoney:number
  ){}
}
export class Info {
  constructor(public   key:number,
              public   name: string,
              public   age:number,
              public   phone:number,
              public   address:string,
               ){}
}
export class Lib{
  constructor(
          public  id:number,
          public  picter:string,
          public  author:string,
          public  name:string,
          public  price:number,
          public  instru:string,     
  ){}
}
export class Buylib{
  constructor(
          public  id:number,
          public  picter:string,
          public  author:string,
          public  name:string,
          public  price:number,
          public  instru:string,
          public  time: Time
  ){}
}
export class Buylibs{
  constructor(
          public  id:number,
          public  author:string,
          public  name:string,
          public  instru:string
  ){}
}
