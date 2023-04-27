import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  getAllEmployees(): Observable<Employees[]>{
    return this.http.get<Employees[]>("https://localhost:7130/api/employees")
  }
  addEmployee(addEmployeeRequest: Employees):Observable<Employees>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employees>("https://localhost:7130/api/employees",addEmployeeRequest);
  }
  getEmployee(id: string){
    return this.http.get<Employees>("https://localhost:7130/api/employees/"+id);
  }
  updateEmployee(id: string, updateEmployeeRequest: Employees): Observable<Employees>{
    return this.http.put<Employees>("https://localhost:7130/api/employees/"+id,updateEmployeeRequest);
  }
  deleteEmployee(id: string):Observable<Employees>{
    return this.http.delete<Employees>("https://localhost:7130/api/employees/" + id);
  }
}
