import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  movies:String[]=['sivakasi','gilli','palani','varisu','thunivu'];

  num:number=0;
  mov:number=0;

  showme=true;
  enableRed=false;
  enableBig=false;
  
}
