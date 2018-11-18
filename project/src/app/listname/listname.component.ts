import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

      
@Component({
  selector: 'app-listname',
  templateUrl: './listname.component.html',
  styleUrls: ['./listname.component.css']
})
export class ListnameComponent implements OnInit {
  public list:any;
  constructor(private serive:MovieService) { }

  ngOnInit() {
     this.list = this.serive.getLists();
     console.log(this.list);
     
  }

}
