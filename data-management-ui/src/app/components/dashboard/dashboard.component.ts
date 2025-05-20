import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // getAllmodeluserss: any
  taskDetails: any
  updateDetails:any
  // logininfo: any
  // DisablingAction = function(){}

  constructor(private dash:AuthService, private router:Router){}

  ngOnInit(){
    this.getAllTaskDetails();
    // this.putAllTaskDetails();
    // this.getAllmodelusers();

  }
  // getAllmodelusers(){
  //   this.dash.getAllmodelusers().subscribe((res) =>{ console.log(res);
  //     this.getAllmodeluserss = res;

  //   })
  // }
  
  getAllTaskDetails(){
    this.dash.getTaskDetails().subscribe((res) =>{ console.log(res);
      this.taskDetails = res;
 
    })
  }
putAllTaskDetails(userObj:any){
  this.dash.updateModelTask(userObj).subscribe((res) =>{console.log(res)
    this.updateDetails = res;
  })
}
  onEdit(testobj:any){
    this.taskDetails.forEach((element: { isEdit: boolean; }) => {
      element.isEdit = false;
    });
    testobj.isEdit = true;
  }
  onUpdate(userObj:any){
    this.putAllTaskDetails(userObj);
    this.router.navigateByUrl("/dashboard");

  }
  onCancel(obj:any){
    obj.isEdit = false;
  }

  deleteModelTask(id:number){
    this.dash.deleteModelTask(id).subscribe((res) => {console.log(res)});
    this.router.navigateByUrl("/dashboard");
  }
  alertWithSuccess(){
    Swal.fire("Thank you...",'Updated Successfully','success')
  }
  alertWithSuccess1(){
    Swal.fire("Cancel Update")
  }
  alertWithSuccess2(){
    Swal.fire("Deleted Data")
  }

}
