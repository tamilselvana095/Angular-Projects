import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  name = 'Two way Binding';


  clickme=true;
constructor(){
  setTimeout(() =>{
    this.clickme=false;
  }, 5000)
}

changeTitle(){
  this.title="Happy Learning"
}



}


