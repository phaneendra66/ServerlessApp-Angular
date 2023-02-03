import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  
  id!: number;
  employee!: Employee;
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // this.employee = new Employee();
    // this.employeService.getEmployeeById(this.id).subscribe(data => {
    //   this.employee = data;
    // });
    this.employee =
    {
      "id": 123, firstName: 'Phaneendra', lastName: 'kumar',
      emailId: 'phaneendra.k.poka@accenture.com'
    };
  }
}
