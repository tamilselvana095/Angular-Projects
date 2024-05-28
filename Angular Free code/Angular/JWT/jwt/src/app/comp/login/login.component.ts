
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/login';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  log:Login=new Login();
  

  constructor(private userService:UserService,private route:Router){}

  login(){
    this.userService.login(this.log).subscribe((data:any)=>{
      //console.log(data);
  
      localStorage.setItem("jwtToken",data);
      console.log(localStorage.getItem("jwtToken"))
      alert("successfull login");
     this.route.navigate(['/getall']);
    })

  }

  onSubmit(){
    console.log(this.log);
    this.login();

  }
}
