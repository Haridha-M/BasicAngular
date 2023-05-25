import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy {
myappname:string="tuto";
isDisabled:boolean=false;
twoway:string='pari'
show:boolean=false;
arr:string[]=['hari','priya','uma']
// @Input() public property:any;
@Input() public pro:any;
@Input() public bro:any;
@Output() public outtest=new EventEmitter()

// @Input("property") public ha:any;
arrobj:any[]=[
  {
    name:'ajith',
    age:70
  },
  {
    name:'hari',
    age:20
  },
  {
    name:'karthi',
    age:80
  }
]

constructor(){
  console.log("inside constructor")
}
  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside nginit");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
   console.log("ngonchanges");
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("insideoninit")
  }
 
  ngAfterContentChecked(): void {
    console.log("contentchecked")
  }
  ngAfterContentInit(): void {
    console.log("contentinit")
  }
  ngAfterViewChecked(): void {
    console.log("viewchecked")
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("destroy")
  }
onClick(e:any){
  this.myappname='tutoos'
  this.isDisabled=false
  this.isDisabled=!this.isDisabled
  this.arr.push('karthi')
  this.arrobj.push({name:'uma',age:60})
  console.log(e);
}
temp(value:string){
console.log(value);


}
get(){
  this.outtest.emit("test")
}
}

