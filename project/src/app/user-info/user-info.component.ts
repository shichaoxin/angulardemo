import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { DataService,Info } from '../shared/data.service';
import { NzMessageService } from 'ng-zorro-antd';
import { NewpersonComponent } from '../newperson/newperson.component';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

   i = 1;
   editCache = {};
   dataSet = [];

   
  @ViewChild("child1")            //调用子组件的方法。
  child1:NewpersonComponent;
  
   constructor(private data:DataService,
              private  message:NzMessageService){}
  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  deleteRow(data,i):void{
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
    this.message.info('删除'+ data.name +'成功',{nzDuration:1000});
    // this.dataSet.splice(data,1)
    // let info = new Info(this.i++,data.name,data.age,data.phone,data.address);
   
   
  }
   cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: item
        };
      }
    });
  }




  ngOnInit(): void {
    this.dataSet = this.data.getInfo();
        window.setInterval(()=>{
          this.dataSet;
          this.updateEditCache();
      
      },500);




    // for (let i = 0; i < 20; i++) {
     
    //   this.dataSet.push({
    //   key    : i.toString(),
    //   name   : `Edrward ${i}`,
    //   age    : 32,
    //   phone  :   '',
    //   address: `London Park no. ${i}`,
    // });
     
    // }
   
    this.updateEditCache();
  }
}
