import { Component } from '@angular/core';
import { StudentList } from '..';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
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
  s=new StudentList()
}
