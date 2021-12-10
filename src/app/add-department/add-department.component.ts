import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  
  constructor(private departmentService :DepartmentService,private http:HttpClient,private router:Router) { }
  public goToPage(pageName:String):void {
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {
    
  }
  onSubmit(val:Department){
    this.http.post(`${environment.apiDepartmentUrl}/department/add`,val ).subscribe((result:any)=>{
      console.warn(result);
    });
    console.log("se ajunge in fuctia de submit");
    console.log(val);
  //  this.router.navigate([`home`]);
  }

  

}
