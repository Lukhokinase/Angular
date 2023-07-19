import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


    export class LoginComponent implements OnInit {
    isLoginFailed: boolean | undefined;

   requiredForm: FormGroup | undefined;
    
   

    form: any = {
      username: null,
      password: null
    }
  
    isSuccessful = true;
    isSignUpFailed = true;
    errorMessage = 'password or username is incorrect';
    constructor(private fb: FormBuilder, private authservice: AuthService, private usersservice: UsersService, private tokenStorage: TokenService, private location : Location) { }
    ngOnInit(): void {
      

      
    }

    
    myForm(){
      this.requiredForm = this.fb.group({
        username: ['',Validators.required]
        
        
      })
     }
    login(): void {
      const {username , password } = this.form;
      // console.log(this.form)
      // console.log(username)
      this.authservice.login(username, password).subscribe({
        next: (data) => {
          console.log(data);
          this.tokenStorage.saveToken(data.accessToken)
          this.tokenStorage.saveUser(data)
          this.isSuccessful = true;
          this.isLoginFailed = false;
           this.previousPage()
          
          
        },
        error: (err: { error: { message: string; }; }) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.error(err)
        }
      });
    }
  
  previousPage(): void {
    setInterval(()=>{
      this.location.back();
    }, 3000)
  }

  }