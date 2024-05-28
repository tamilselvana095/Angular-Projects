import { Component,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataSharing';
cars:String[]=[];
carName:String="";

carlist:String[]=["tata","audi","bmw"]

addCar(){
  this.cars.push(this.carName);
  this.carName='';

}


}
