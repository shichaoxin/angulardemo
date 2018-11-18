import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { TelComponent } from './tel/tel.component';
import { ComComponent } from './com/com.component';
import { LoginComponent } from './login/login.component';
import { AnimationsComponent } from './animations/animations.component';
import { DataService } from './shared/data.service';
import { LoloComponent } from './lolo/lolo.component';
import { StarsComponent } from './stars/stars.component';
import { SourceinfoComponent } from './sourceinfo/sourceinfo.component';
import { FilterPipe } from './pipe/filter.pipe';
import { LocalStorage } from './shared/local.storage';
import { UserInfoComponent } from './user-info/user-info.component';
import { NewpersonComponent } from './newperson/newperson.component';
import { NewsComponent } from './news/news.component';
import { N1Component } from './news/n1/n1.component';
import { N2Component } from './news/n2/n2.component';
import { N3Component } from './news/n3/n3.component'; 
import { SourveService } from './shared/sourve.service';
import { N4Component } from './news/n4/n4.component';
// import { NgxEchartsModule } from 'ngx-echarts';
import { MapsComponent } from './maps/maps.component';
import { M1Component } from './maps/m1/m1.component';
import { M2Component } from './maps/m2/m2.component';
import { MusicComponent } from './music/music.component';
import { FilmComponent } from './film/film.component';
import { GamesComponent } from './games/games.component';
import { Mm1Component } from './music/mm1/mm1.component';
import { Mm2Component } from './music/mm2/mm2.component';
import { RecordComponent } from './record/record.component';
import { FilmcontentComponent } from './film/filmcontent/filmcontent.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";
import { ListnameComponent } from './listname/listname.component';
import { GamesplayComponent } from './gamesplay/gamesplay.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelComponent,
    ComComponent,
    LoginComponent,
    AnimationsComponent,
    LoloComponent,
    StarsComponent,
    SourceinfoComponent,
    FilterPipe,
    UserInfoComponent,
    NewpersonComponent,
    NewsComponent,
    N1Component,
    N2Component,
    N3Component,
    N4Component,
    MapsComponent,
    M1Component,
    M2Component,
    MusicComponent,
    FilmComponent,
    GamesComponent,
    Mm1Component,
    Mm2Component,
    RecordComponent,
    FilmcontentComponent,
    ListnameComponent,
    GamesplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
       }
   })

    // NgxEchartsModule
  
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },DataService,LocalStorage,SourveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
