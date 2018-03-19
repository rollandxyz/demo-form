import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }
}
