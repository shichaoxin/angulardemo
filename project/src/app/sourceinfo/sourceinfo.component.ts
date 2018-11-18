import { Component, OnInit, Input } from '@angular/core';
import { DataService ,Data} from '../shared/data.service';
import { _localeFactory } from '@angular/core/src/application_module';


@Component({
  selector: 'app-sourceinfo',
  templateUrl: './sourceinfo.component.html',
  styleUrls: ['./sourceinfo.component.css']
})
export class SourceinfoComponent implements OnInit {
  @Input()
  goodId:string;
  @Input()
  goodCount:number;
  i = 1;
  editCache = {};
  dataSet = [];
   constructor(private dataService:DataService){
   }
  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
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
    this.dataSet=this.dataService.getDatas();
    console.log(this.dataSet);
    
    // for (let i = 0; i < 15; i++) {
    //   this.dataSet.push({
    //     key    : i.toString(),
    //     name   : `Edrward ${i}`,
    //     age    : 32,
    //     address: `London Park no. ${i}`,
    //   });
    // }
    this.updateEditCache();
  }
}