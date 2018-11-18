import { Component, OnInit, ViewChild, ElementRef ,Renderer2} from '@angular/core';
import { error } from 'util';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @ViewChild('container') container:ElementRef;//获取dom节点
  @ViewChild('div3') div3:ElementRef;//使用Renderer2需要获取ID
//
  constructor(private el:ElementRef,
              private renderer2:Renderer2) { }

  
  change():void{
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.btn1'),'background','green');

  }
  change1():void{
    this.renderer2.setStyle(this.div3.nativeElement,'background','red');
  }
   ngAfterViewInit() {
     const c = this.container.nativeElement;
     ClassicEditor.create(c)
       .then(editor=>{
         console.log(editor);
       })
       .catch(error=>{
         console.log(error);
         
       })
     
   }
  ngOnInit() {
    //  this.el.nativeElement.querySelector('.btn1').style.height = '300px';
  }



}
