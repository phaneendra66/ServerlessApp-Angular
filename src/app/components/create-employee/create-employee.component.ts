import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Employee}  from 'src/app/Models/employee';
import {EmployeeService} from 'src/app/service/employee.service'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    //this.employee = { "id": 123, firstName: 'phani', lastName: 'kumar', emailId: 'phaneendra.k.poka@gmail' }
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
