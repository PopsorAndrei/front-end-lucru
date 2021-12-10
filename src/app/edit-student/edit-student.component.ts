import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  private apiServerUrl = environment.apiBaseUrl;
  private id!:string;
  public studentToBeUpdated!:Student;

  constructor(public router:Router,public route:ActivatedRoute, private http:HttpClient ) {

   }


  public updatedStudent !:Student

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
        console.log(params['id']);
        this.id=params['id'];
        console.log(this.id);
      })

      this.http.get(`${this.apiServerUrl}/student/findById/${this.id}`).subscribe((result:any) => {
            console.log(result);
            this.studentToBeUpdated = result;
      });

  }
  

  onSubmit(val:Student){

    this.http.put(`${this.apiServerUrl}/student/update`,val ).subscribe((result:any)=>{
      console.warn(result);
    });
    console.log("se ajunge in fuctia de submit");
    console.log(val);
    this.router.navigate([`home`]);

  }


  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
}
}
