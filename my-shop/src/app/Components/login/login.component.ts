import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


    export class LoginComponent implements OnInit {
    isLoginFailed: boolean | undefined;

   
    form: any = {
      username: null,
      password: null
    }
  
    isSuccessful = true;
    isSignUpFailed = true;
    errorMessage = 'password or username is incorrect';
    constructor(private authservice: AuthService, private usersservice: UsersService, private tokenStorage: TokenService, private router: Router ) { }
    ngOnInit(): void {

      
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
    this.router.navigate(['/menu'])
  }

  }