import { Component } from '@angular/core';
import {StudentList  } from "../";

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.component.html',
  styleUrls: ['./newservice.component.css']
})
export class NewserviceComponent {
  // arrobject:any[]=[
  //   {
  //     name:'ajith',
  //     age:70,
  //     dep:"cse"
  //   },
  //   {
  //     name:'hari',
  //     age:20,
  //     dep:'ece'
  //   },
  //   {
  //     name:'karthi',
  //     age:80,
  //     dep:'it'
  //   }
  // ]
  s=new StudentList();
}
