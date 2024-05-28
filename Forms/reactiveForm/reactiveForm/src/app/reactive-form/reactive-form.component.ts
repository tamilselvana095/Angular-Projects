import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  contactForm=new FormGroup({
    firstName:new FormControl("",[Validators.required,Validators.maxLength(10)]),
    lastName:new FormControl(""),
    email:new FormControl("tamilselvan@gmail.com"),
    gender:new FormControl("male"),
    country: new FormControl("1"),
    address:new FormGroup({
      city:new FormControl("chennai"),
      street:new FormControl("t nagar"),
      pincode:new FormControl("600017")
    })
  });

  get firstName(){
    return this.contactForm.get("firstName");
  }

  onSubmit(){
   console.log(this.contactForm.value);

    

  }


  

}

