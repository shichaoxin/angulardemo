import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { TelComponent } from './tel/tel.component';
import { ComComponent } from './com/com.component';
import { LoginComponent } from './login/login.component';
import { AnimationsComponent } from './animations/animations.component';
import { LoloComponent } from './lolo/lolo.component';
import { SourceinfoComponent } from './sourceinfo/sourceinfo.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NewsComponent } from './news/news.component'
import { N3Component } from './news/n3/n3.component';
import { N1Component } from './news/n1/n1.component';
import { MapsComponent } from './maps/maps.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { MusicComponent } from './music/music.component';
import { RecordComponent } from './record/record.component';
import { FilmComponent } from './film/film.component';
import { GamesComponent } from './games/games.component';
import { ListnameComponent } from './listname/listname.component';
import { GamesplayComponent } from './gamesplay/gamesplay.component';





const routes:Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'tel',
        component:TelComponent
    },
      {
        path:'com',
        component:ComComponent
      },
      {
        path:'record',
        component:RecordComponent
      },
      {
        path:'maps',
        component:MapsComponent
      },
      {
        path:'music',
        component:MusicComponent
      },
      {
        path:'games',
        component:GamesComponent
      },
      {
        path:'gamesplay',
        component:GamesplayComponent
      },
      {
        path:'listname',
        component:ListnameComponent
      },
      {
        path:'film',
        component:FilmComponent
      },
      {
        path:'animations',
        component:AnimationsComponent
      },
      {
        path:'animations/:dataId',
        component:LoloComponent
      },
      {
        path:'sourceinfo',
        component:SourceinfoComponent
      },
      {
        path:'userinfo',
        component:UserInfoComponent
      },
      {
        path:'news',
        component:NewsComponent,
      }, 
       {
          path:'n1/:dataId',
          component:N3Component
        },
       
    ]
  }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
