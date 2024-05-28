import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  username:String='';
  password:String='';
  userData:User[]=[];

  

  add(){
    this.userData.push({username: this.username, password: this.password});
    this.username='';
    this.password='';

  }



}
