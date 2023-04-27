import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit{
  constructor(private employeeService: EmployeesService){}
  employees: Employees[] = [];
  
  ngOnInit():void{
    this.employeeService.getAllEmployees().subscribe({
      next: (employees)=>{
      this.employees = employees;
    },
      error: (response)=>{
        console.log(response);
      }
    })
    
  }
}
