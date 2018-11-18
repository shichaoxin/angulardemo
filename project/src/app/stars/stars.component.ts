import { Component, OnInit, Input,Output ,EventEmitter,OnChanges} from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
    public stars;
@Input()
    public  rating;
@Input()
    iscolor;
@Input()
    readonly:boolean=true;
//抛出改变的rating的值
@Output()  
  private ratingchange:EventEmitter<number> = new EventEmitter();
    constructor() { }

  ngOnInit() {
    this.stars=[];
    for(let i=0;i<=5;i++){
      this.stars.push( i>this.rating )
    }
  }
  ngOnChanges(){
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push( i>this.rating )
    }
  }
  changestar( index:number ):void{
    if(!this.readonly){
      this.ngOnInit();
      this.rating = index +1;
      this.ratingchange.emit( this.rating )
    }
  }

}
