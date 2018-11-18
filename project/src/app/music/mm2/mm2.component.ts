import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SourveService,Musicc} from '../../shared/sourve.service';


@Component({
  selector: 'app-mm2',
  templateUrl: './mm2.component.html',
  styleUrls: ['./mm2.component.css']
})
export class Mm2Component implements OnInit {
    music:any;
    musics:any;
   constructor(private data:SourveService,
               private renderer2:Renderer2) { }

   show(index){
     let Music = new Musicc(index.songname,index.song,index.songlist);
     this.musics.unshift(Music);//向数组的开头添加一个元素。
     
   }


ngOnInit() {
    this.music = this.data.getMusic();
    console.log(this.music);
    this.musics = this.data.getMusicc();
  }

}
