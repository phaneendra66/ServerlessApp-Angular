import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerForm: any = FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router) {
    
   }
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      //alert("Great!!");
      this.router.navigate(['/employees']);
    }

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
