import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiDeparmentUrl =environment.apiDepartmentUrl;
  
  constructor(private http:HttpClient) { }

  public getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiDeparmentUrl}/department/all`);
  }
  public addDepartment(department:Department): Observable<Department>{
    return this.http.post<Department>(`${this.apiDeparmentUrl}/department/add`,department);
  }

  public deleteStudent(departmentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiDeparmentUrl}/department/delete/${departmentId}`);
  }

  public getDepartmentsList() : Observable<string[]> {
    return this.http.get<string[]>(`${this.apiDeparmentUrl}/department/listofdepartments`);
  }
}
