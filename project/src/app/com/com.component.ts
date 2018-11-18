import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {
   goods:string="";
   goodCount:number;
   isSpecail:boolean=false;
   size:number=7;
   search:FormControl = new FormControl;
  constructor() { 
    setInterval(
      ()=>{
        this.goodCount=Math.random()*100;
      },1000);
      this.search.valueChanges
      .subscribe(stock=>this.stokinfo(stock));
  }
      
  ngOnInit() {
  }
  onkeykey(){
    console.log()
  }
  Ondack(event:any){
    console.log(event.target.value);
  }
  toggle(){
    this.isSpecail=true;
  }
  stokinfo(value:string){
    console.log(value);
  }
}
