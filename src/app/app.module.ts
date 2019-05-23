import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {FormsModule} from '@angular/forms';
import * as firebase from 'firebase';
import {JRouter} from './jrouter.service';

const config = {
  apiKey: 'AIzaSyChSTdDfRuck6HUU2yDY2-ICRBIh9BWJiI',
  authDomain: 'blackkoijonny-420cc.firebaseapp.com',
  databaseURL: 'https://blackkoijonny-420cc.firebaseio.com/',
  storageBucket: 'gs://blackkoijonny-420cc.appspot.com'
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    // Pages of Website Below
    AboutMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:  [JRouter],
  bootstrap: [AppComponent]
})
export class AppModule { }
