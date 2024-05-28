import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice1';
  name:String='';

  counting:number=0;

  clickme=true;

  constructor(){
    setTimeout(()=>{
      this.clickme=false;
    },5000);
  }
onSubmit(){
  this.title='Hello welcome Mr.'+this.name;
  this.name='';
}

count(){
  this.counting++;
  
}

value='';
value1='';

handleInput(event:any){

  this.value=(event.target as HTMLInputElement).value;

}

}
