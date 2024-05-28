import { Component, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('userinput') userData:User[]=[];

}
