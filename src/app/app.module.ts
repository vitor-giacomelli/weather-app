import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module'
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CidadeEntityComponent } from './shared/cidade-entity/cidade-entity.component';


const appRoutes = [
  {
    path:'setting', component:SettingComponent
  },
  {
    path:'home', component:AppComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    CidadeEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
           
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

