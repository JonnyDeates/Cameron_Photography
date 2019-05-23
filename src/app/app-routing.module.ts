import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [  { path: '', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
