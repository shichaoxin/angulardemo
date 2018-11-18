import { Component, OnInit, ViewChild, Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-gamesplay',
  templateUrl: './gamesplay.component.html',
  styleUrls: ['./gamesplay.component.css']
})
export class GamesplayComponent implements OnInit {
  x=0;
  constructor(private renderer2:Renderer2,
              private el:ElementRef) { }

  @ViewChild ('snake') snake:ElementRef;
  top():void{
    setInterval(()=>{

     this.x++;
     
    },1000)
   
    
  }







  ngOnInit() {
  }
}
