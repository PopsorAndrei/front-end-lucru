import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentService } from './student.service';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

const routes:Routes =[
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/home' ,pathMatch: 'full'},
  {path: 'add', component:AddStudentComponent},
  {path: 'edit/:id', component:EditStudentComponent},
  {path: 'department', component:DepartmentComponent},
  {path: 'addDepartment', component:AddDepartmentComponent}
];



@NgModule({
  declarations: [
    AppComponent,HomeComponent, AddStudentComponent, EditStudentComponent, DepartmentComponent, AddDepartmentComponent ,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule, FormsModule
  ], 
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
