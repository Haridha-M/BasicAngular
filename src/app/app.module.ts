import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import{FormsModule}from '@angular/forms';
import { MycomponentsComponent } from './mycomponents/mycomponents.component'

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    MycomponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
