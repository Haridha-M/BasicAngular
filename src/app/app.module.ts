import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import{FormsModule}from '@angular/forms';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { ServiceComponent } from './service/service.component';
import { NewserviceComponent } from './newservice/newservice.component'

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    MycomponentsComponent,
    ServiceComponent,
    NewserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
