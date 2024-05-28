import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  user:User=new User();

 response:String='';

  constructor(private userService:UserService,private route :Router){}

  ngOnInit(): void {
    
  }

  signUp(user:User){
    this.userService.signUp(this.user).subscribe((data:String) =>{
      console.log(data);
      this.response=data
    alert(this.response)});

    this.route.navigate(['/login']);
      user=new User();
  }

  onSubmit(){
    console.log(this.user);
   this.signUp(this.user);

  }
}
