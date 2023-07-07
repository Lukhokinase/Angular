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

    onSubmit(f: NgForm){
      
    }
    User: any = {
      username: null,
      password: null
    }
  
    isSuccessful = true;
    isSignUpFailed = true;
    errorMessage = 'password or username is incorrect';
    constructor(private authService: AuthService, private usersservice: UsersService) { }
    ngOnInit(): void {
    }
    login(): void {
      const { username, password } = this.User;
      console.log(this.User)
      this.authService.login(username, password).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }}