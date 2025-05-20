import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dtm:AuthService, private router:Router){}
  
  ngOnInit(): void{}
  

  loginForm = new FormGroup({
    email: new FormControl('', 
      [Validators.required, 
      Validators.email]),
    password: new FormControl('',
      [Validators.required, 
       Validators.minLength(4), 
       Validators.maxLength(12),
      ]),
  });

  loginSubmited(){
    console.log(this.loginForm.value);
    this.dtm.loginUser(this.loginForm.value)
    .subscribe((data)=>console.log(data));
    this.router.navigateByUrl("/dashboard");
  }
  alertWithSuccess(){
    Swal.fire("Thank you...",'You login Successfully','success')
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}
