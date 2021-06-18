import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Employee from 'src/app/models/employee.model';
import { EmployeeSrivice } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
id: number;
header:string;
  constructor(private router: Router, private route: ActivatedRoute,private employeeService: EmployeeSrivice) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0?'Add Employee': 'Edit Employee';
  }
  onSubmit(form:NgForm){
    console.log('submitt');
    console.log(form);
   let Employee:Employee={
     id: form.value.id,
     name:form.value.name,
     email:form.value.email,
     phone:form.value.phone,
   }
    this.employeeService.onAdd(Employee);
    this.router.navigateByUrl('');
  }

}
