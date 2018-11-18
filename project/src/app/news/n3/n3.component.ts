import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-n3',
  templateUrl: './n3.component.html',
  styleUrls: ['./n3.component.css']
})
export class N3Component implements OnInit {
  Lolo:any;
  isVisible = true;
  constructor(private routerInfo:ActivatedRoute,
              private dataSerivice:DataService) { }
              

  ngOnInit() {
    // let dataId:number = this.routerInfo.snapshot.params['dataId']
    // this.Lolo = this.dataSerivice.getBookId(dataId);
    this.Lolo = this.dataSerivice.getBuylibs();
    console.log(this.Lolo);
    
  }

}
