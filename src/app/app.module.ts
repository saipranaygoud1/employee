import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Version, } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import { Component, } from '@angular/core';
import { NgForm} from '@angular/forms';
import { EditComponent } from './employees/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,EmployeesComponent,EditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
