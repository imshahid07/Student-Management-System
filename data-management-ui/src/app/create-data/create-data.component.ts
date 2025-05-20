import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../components/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent {

  constructor(private add:AuthService, private router:Router){}

  ngOnInit():void{

  }

  registerForm = new FormGroup({
    userId:new FormControl(""),
    title: new FormControl(""),
    description: new FormControl("")
});
dataSubmited(){
this.add.AddmodelTask(this.registerForm.value)
.subscribe((data) =>console.log(data));
this.router.navigateByUrl("/dashboard");
}
}
