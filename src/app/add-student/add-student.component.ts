import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  private apiServerUrl = environment.apiBaseUrl;
  public listOfDepartments!:string[];

  constructor(private http:HttpClient,private router:Router,private departmentService :DepartmentService) { }


  //get values has only testing purpouse
  getValues(val:Student){
    console.log(val);
    



    console.log("sper");
  }

  
  goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`]);
  }

  onSubmit(val:Student){
    this.http.post(`${this.apiServerUrl}/student/add`,val ).subscribe((result:any)=>{
      console.warn(result);
    });
    console.log("se ajunge in fuctia de submit");
    console.log(val);
    this.router.navigate([`home`]);
  }
  ngOnInit(): void {

    this.departmentService.getDepartmentsList().subscribe((response:string[]) =>{
      this.listOfDepartments = response;
      console.log(this.listOfDepartments);
      console.log("get departments list is called");
    })
   
  }
  log(x:any):void{
    console.log(x);

  }

}
