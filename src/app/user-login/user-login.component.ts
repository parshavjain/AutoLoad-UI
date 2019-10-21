import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication-service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin = false
  submitted = false;
  errorMessage = ''

  constructor(private router: Router, 
    private loginservice: AuthenticationService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  checkLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    (this.loginservice.authenticate(this.f.username.value, this.f.password.value).subscribe(
      data => {
        this.router.navigate(['/user'])
        this.invalidLogin = false
        this.errorMessage = ''
      },
      error => {
        this.errorMessage = 'Invalid username or password!';
        this.invalidLogin = true
      }
    )
    );
  }
}
