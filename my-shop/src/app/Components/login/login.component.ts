import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


    export class LoginComponent implements OnInit {
    isLoginFailed: boolean | undefined;

    onSubmit(f: NgForm){
      
    }
    form: any = {
      username: null,
      password: null
    }
  
    isSuccessful = true;
    isSignUpFailed = true;
    errorMessage = 'password or username is incorrect';
    constructor(private authservice: AuthService, private usersservice: UsersService) { }
    ngOnInit(): void {

      
    }
    login(): void {
      const {username , password } = this.form;
      // console.log(this.form)
      console.log(username)
      this.authservice.login(username, password).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isLoginFailed = false;
          this.replacePage()
        },
        error: (err: { error: { message: string; }; }) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.error(err)
        }
      });
    }
  
  replacePage(): void {
    window.location.replace('/Checkout')
  }

  }