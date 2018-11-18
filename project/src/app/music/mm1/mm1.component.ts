import { Component, OnInit } from '@angular/core';
import { SourveService } from '../../shared/sourve.service';

@Component({
  selector: 'app-mm1',
  templateUrl: './mm1.component.html',
  styleUrls: ['./mm1.component.css']
})
export class Mm1Component implements OnInit {
   music:any;
  constructor(private data:SourveService) { }

  ngOnInit() {
    this.music = this.data.getMusicc();
    console.log(this.music);
    
  }

}
