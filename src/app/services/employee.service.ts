import { Injectable } from '@angular/core';
import  Employee  from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSrivice {
employees:Employee[] = [
  {
    id: 1,
    name:"employee one",
    email:"employee@one.com",
    phone: 11111
    
  },
  {
    id: 2,
    name:"employee two",
    email:"employee@two.com",
    phone: 22222
  },
  {
    id: 3,
    name:"employee three",
    email:"employee@three.com",
    phone: 33333
  },
  {
    id: 4,
    name:"employee four",
    email:"employee@four.com",
    phone: 44444
  },
  {
    id: 5,
    name:"employee five",
    email:"employee@five.com",
    phone:55555
  }
];
constructor() { }
onGet(){
  return this.employees;
}

onAdd(employee:Employee){
  let empl = this.employees.find(x=>x.id==employee.id);
  let indd = null;
  this.employees.forEach((val,ind)=>{
    if(val.id==employee.id){
      indd = ind;
    }
  })
  console.log(empl);
  if(empl&&(indd!=null)){
    // let index = this.employees.indexOf(employee); 
    this.employees[indd].name = employee.name;
    this.employees[indd].phone = employee.phone;
    this.employees[indd].email = employee.email;
  }else{

    this.employees.push(employee);
    console.log(this.employees)
  }
}
onDelete(id: number){
  let employee = this.employees.find(x=>x.id===id);
  let index = this.employees.indexOf(employee,0);
  this.employees.splice(index,1);
}
}
