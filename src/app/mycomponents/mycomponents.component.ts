import { outputAst } from '@angular/compiler';
import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-mycomponents',
  templateUrl: './mycomponents.component.html',
  styleUrls: ['./mycomponents.component.css']
})
export class MycomponentsComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck {
 myname:string="Form";
 num:number=1;
 
 title1 = [{
  name:'selva',
  age:90
},
{
name:'haritha',
age:20
}];
@Output() public arr=new EventEmitter()
 currentCustomer = 'Maria';
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
  increment(){

this.num+=1;  
  }
  decrement(){
    if(this.num>0)
    this.num-=1
  }
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
    // You can perform additional actions here, such as sending the data to a server
  }

  submit(){
    this.arr.emit(this.title1)
  }

}
