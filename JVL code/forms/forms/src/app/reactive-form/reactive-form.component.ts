import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  contactForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastName:new FormControl('Selvan'),
    email:new FormControl('tamilselvana@stgit.com'),
    gender:new FormControl('male'),
    isMarried:new FormControl(''),
    country:new FormControl('2'),
    address:new FormGroup({
      city:new FormControl('Chennai'),
      street:new FormControl('T nagar'),
      pincode:new FormControl('600017')
    })
  });

  get firstname(){
    return this.contactForm.get('firstName');
  }

  onSubmit(){
    console.log(this.contactForm.value);
    
  }
}
