import { Component, OnInit } from '@angular/core';
import { DataService,Shopping } from '../shared/data.service';
import { SourveService } from '../shared/sourve.service';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.css']
})
export class TelComponent implements OnInit {


public shoping;
public libss;

  constructor(private DataService:DataService,
            public all:SourveService) {}

  ngOnInit() {
      this.shoping= this.DataService.getShopping();
      this.libss = this.DataService.getBuylib();
      console.log(this.libss);
      console.log(this.shoping);
     
  }
  money(index,value):void{
      index.allmoney = index.price*value;
      // this.all.Allmoney += index.allmoney
     
  } 
}
