import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public students!:Student[];

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private studentService:StudentService, private router:Router,private http:HttpClient){}

  ngOnInit(){
    this.getStudents();
  }

  public getStudents() :void {
    this.studentService.getStudents().subscribe(
      (response:Student[]) => {
        this.students = response;
        console.log("testing stuff")
      },
      (error :HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
}
editStudent(studentId:number):void{
  this.router.navigate([`edit/${studentId}`]);

}

deleteStudent(studentId:number):void{
  console.log( `will be delted` + `${studentId}`);
  this.http.delete(`${this.apiServerUrl}/student/delete/`+`${studentId}`).subscribe((result:any)=>{
    window.location.reload();
  });;
    this.router.navigate(['']);
    
}


  public onOpenModal(student: Student|null, mode: string): void {


    const container = document.getElementById('main-container')
    const button =document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode ==='add'){
      button.setAttribute('data-target','#addStudentModal');
    }
    if(mode ==='edit'){
      button.setAttribute('data-target','#updateStudentModal');
    }
    if(mode ==='delete'){
      button.setAttribute('data-target','#deleteStudentModal');
    }
      container?.appendChild(button);
      button.click();
  }

}
