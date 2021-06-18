import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EditComponent } from './employees/edit/edit.component';


const routes: Routes = [
  {
    path:"",
    component: EmployeesComponent
  },
  {
    path:"employee/add/:id",
    component:EditComponent
  },
  
  {
    path: "employee/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule],

})
export class AppRoutingModule { }
