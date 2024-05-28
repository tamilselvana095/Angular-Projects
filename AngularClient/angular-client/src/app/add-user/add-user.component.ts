import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user:User={'name':'','email':''};
  constructor(private http:HttpClient){}

  submitForm(){
    return this.http.post<User>("http://localhost:8080/user",this.user).subscribe(()=>
    console.log("success"));
    this.user={'name':'','email':''};
  }


  

  

}
