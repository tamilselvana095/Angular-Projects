import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() useradded:EventEmitter<User[]>=new EventEmitter;

  userData:User[]=[];
  username:String='';
  email:String='';

  add(){
    this.userData.push({username:this.username,email:this.email});

    this.username='';
    this.email='';

    this.useradded.emit(this.userData);
  }

}
