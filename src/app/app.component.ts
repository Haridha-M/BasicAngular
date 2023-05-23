import { Component, ViewChild,AfterContentInit, AfterViewInit } from '@angular/core';
import { MyappComponent } from './myapp/myapp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  message=" "
  @ViewChild(MyappComponent) child:any;
  title ="finstein";
    tit=[{
    name:"hari",
    age:20
  },{
    name:'pari',
    age:26
  }
];
  title1 = [{
    name:'selva',
    age:22
  },
{
  name:'haritha',
  age:90
}];
get1(event:string){
console.log(" ",event)
}
ngAfterViewInit(): void {
  // throw new Error('Method not implemented.'); 
  this.message= this.child.myappname
}
}
