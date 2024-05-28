import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() carAdded:EventEmitter<String []>=new EventEmitter;

  cars:String[]= [];
  carName="";

  addCar(){
    this.cars.push(this.carName);
    this.carName="";
    console.log(this.cars);

    this.carAdded.emit(this.cars);
  }


}
