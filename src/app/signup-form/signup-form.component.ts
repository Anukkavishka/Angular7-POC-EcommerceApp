import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form= new FormGroup({
    username : new FormControl('',[Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace],
    UsernameValidators.shouldBeUnique),//asyncValidationFn
    password : new FormControl('',Validators.required) 
  });
//this is how we define a getter in TS
get password(){
  return this.form.get('password');
}

login(){
  this.form.setErrors({
    invalidLogin: true //intentionally raising an error to check the functionality.
  });
}



}

