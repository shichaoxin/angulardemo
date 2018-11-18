import { Component, OnInit } from '@angular/core';
import { SourveService } from '../../shared/sourve.service';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
  public  data:any;
  public  days:any;
  public timess:any;
  public Time:Date = new Date()
  constructor(private datas:SourveService,
              private message:NzMessageService) { }


  ngOnInit() {
     this.data = this.datas.getInfo();
     console.log(this.data);
     this.days = this.datas.getDay();
     console.log(this.days);
     this.timess = this.datas.getTime();
     console.log(this.timess);
     
  }

}
