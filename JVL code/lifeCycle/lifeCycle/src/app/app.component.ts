import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycle';
  titles:String[]=[];
  disableHeading=false;

  addTitle(){
    this.titles.push(this.title);
    console.log(this.titles);
  }



}
