






import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 cars:String[]=[];

carDataUpdated(carsData: String[]){
  this.cars=carsData

}

}
