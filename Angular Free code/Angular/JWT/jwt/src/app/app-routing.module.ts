import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { LoginComponent } from './comp/login/login.component';
import { ContactUsComponent } from './comp/contact-us/contact-us.component';
import { GetComponent } from './comp/get/get.component';


const routes: Routes = [
  { path: '', component:SignUpComponent },
  { path: 'login', component:LoginComponent },
  { path: 'contactus', component:ContactUsComponent },
  { path: 'getall' , component:GetComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
