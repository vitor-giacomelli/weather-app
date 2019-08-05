import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [{
  path: 'home', component: AppComponent 
},{
  path: 'setting', component: SettingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
