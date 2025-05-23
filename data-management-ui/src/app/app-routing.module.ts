import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CreateDataComponent } from './create-data/create-data.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
  path:'login', component: LoginComponent
  },
  
  {
    path:'dashboard', component: DashboardComponent
  },
  
  {
    path: 'create-data', component:CreateDataComponent
  },
  
  {
    path:'',
    redirectTo:'home', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
