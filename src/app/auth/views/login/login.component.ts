import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('admin@admin.com', [Validators.email, Validators.required]),
    password: new FormControl('123456', Validators.required)
  });
  loginFormInvalid = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigateByUrl('');
  }

}
