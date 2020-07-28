import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'login', component: LoginComponent
  },{
    path: 'registration', component: RegistrationComponent
  }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
