import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BoxesComponent } from "./boxes/boxes.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BoxesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
