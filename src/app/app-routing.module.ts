import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '../app/components/employee-list/employee-list.component'
import { CreateEmployeeComponent } from '../app/components/create-employee/create-employee.component'
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component'
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component'
import { LoginComponent } from './components/login/login.component'



//const routes: Routes = [];

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
