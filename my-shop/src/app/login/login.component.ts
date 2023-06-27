import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService: any;
  router: any;
  constructor(){

}
formGroup = new FormGroup({
  email : new FormControl(''),
  password : new FormControl('')
})
login(){
  this.authService.setToken(this.formGroup.value.email)
  this.router.navigate(['dashboard']);
}
}
