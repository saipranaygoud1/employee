import { Component, OnInit } from '@angular/core';
import { EmployeeSrivice} from 'src/app/services/employee.service';
import Employee from 'src/app/models/employee.model';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];

  constructor(private employeeService:EmployeeSrivice) { }

  ngOnInit(): void {
  this.employees = this.employeeService.onGet();
  }
onDelete(id: number){
  this.employeeService.onDelete(id);
}
}
