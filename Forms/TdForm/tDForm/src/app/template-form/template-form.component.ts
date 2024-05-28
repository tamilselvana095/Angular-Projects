import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','USA'),
    new Country('3','UK')
  ]

  contact!:Contact;

  ngOnInit(): void {
    this.contact={
      firstName:"",
      lastName:"",
      email:"tamilselvan@gmail.com",
      gender:"male",
      country:"1",
      address:{
        city:"chennai",
        street:"t nagar",
        pincode:"600017",

      }
    }

    

  }



  onSubmit(form:NgForm){
    console.log(form.value);
  }

}

class Country{
  id:String;
  name:String;

  constructor(id:String,name:String){
    this.id=id;
    this.name=name;
  }
}

class Contact{
  firstName!:String;
  lastName!:String;
  email!:String;
  gender!:String;
  country!:String;
  address!:{
    city:String;
    street:String;
    pincode:String;
  }

}
