import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  userData:User[]=[];

  userUpdate(userDatas:User[]){
    this.userData=userDatas;


  }

}
