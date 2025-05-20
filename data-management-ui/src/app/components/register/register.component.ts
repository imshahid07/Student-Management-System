import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  repeatpass: string = 'none';

  constructor(private serv:AuthService, private router:Router){}

  ngOnInit(): void{}

  registerForm = new FormGroup({
    fullName: new FormControl("",
    [Validators.required,
     Validators.minLength(4),
     Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",
    [Validators.required, 
     Validators.email]),
    password: new FormControl("",
    [Validators.required, 
     Validators.minLength(4), 
     Validators.maxLength(12)]),
    rpwd: new FormControl("",[Validators.required])});

  registerSubmited(){
    if (this.Password.value == this.ConfirmPassword){
      console.log("Submited")
    }else{
      this.repeatpass = 'inline';
    }
    //console.log(this.registerForm.value);
    this.serv.connectBackend(this.registerForm.value)
    .subscribe((data)=>console.log(data));
    this.router.navigateByUrl("/home");
  }

  alertWithSuccess(){
    Swal.fire("Thank you...",'You register Successfully','success')
  }

  get FullName(): FormControl {
    return this.registerForm.get('fullName') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get ConfirmPassword(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }
}
