import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck } from '@angular/core';


@Component({
  selector: 'app-mycomponents',
  templateUrl: './mycomponents.component.html',
  styleUrls: ['./mycomponents.component.css']
})
export class MycomponentsComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck {
 myname:string="hari";
  constructor(){
    console.log("inside constructor")
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log(" docheck")
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("destroy")
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("viewchecked")
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("contentinit")
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("content checked")
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("view init")
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("simplechanges")
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("oninit")
  }


}
