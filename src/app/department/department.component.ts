import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  private apiServerUrl = environment.apiDepartmentUrl;
  public departments!:Department[];
  constructor(private departmentService :DepartmentService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

}
public deleteDepartment(departmentId:number):void {
  console.log( `will be delted` + `${departmentId}`);
  this.http.delete(`${this.apiServerUrl}/department/delete/`+`${departmentId}`).subscribe((result:any)=>{
    window.location.reload();
  });;
    
}

public getDepartments() :void {
  this.departmentService.getDepartments().subscribe((response:Department[]) =>{
    this.departments = response;
    console.log("get departments called");
  },
  (error:HttpErrorResponse)=>{
    alert(error.message);
  })
}

}
