import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { TestServiceService } from '../test-service.service';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  employee=[
    {"id":1,"name":"Ram Prasad Singh","DOB":"15-07-1968"},
    {"id":2,"name":"Seema Singh","DOB":"12-07-1973"},
    {"id":3,"name":"Sury Bhan Singh","DOB":"05-03-1998"},
    {"id":4,"name":"Neha Singh","DOB":"11-05-1995"},
    {"id":5,"name":"UdayBhan Singh","DOB":"15-07-1993"},
    {"id":6,"name":"Neel Singh","DOB":"28-11-2017"},
    {"id":7,"name":"Geeta Singh","DOB":"06-03-1998"},
    {"id":8,"name":"Yash Pal","DOB":"18-02-2009"},
    
  ]
  constructor(private _EmployeeService:TestServiceService,private rout:ActivatedRoute,private router:Router) {
    console.log(this.employee)
  }
   public animal;
   public Employess=[];
  ngOnInit() {
   this._EmployeeService.getEmployeeList()
   .subscribe(data=> this.Employess=data); 
   
   this.rout.paramMap.subscribe(params=>{
     let id=parseInt(params.get('ID'));
     this.animal=id;
   })
  }

  Previous()
  {
    alert(this.animal)
  }
  Next()
  {
    alert('Hello')
  }

}
