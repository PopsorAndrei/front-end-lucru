import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  public students!:Student[];

  constructor(private studentService:StudentService,private router :Router){}

  ngOnInit(){
    this.getStudents();
  }

  public getStudents() :void {
    this.studentService.getStudents().subscribe(
      (response:Student[]) => {
        this.students = response;
      },
      (error :HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
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
