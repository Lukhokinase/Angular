import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


    export class RegisterComponent implements OnInit {
   form: any = {
      username: '',
      email: '',
      password: ''
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    constructor(private authService: AuthService) { }
    ngOnInit(): void {
    }
    SignUp(): void {
      const { username, email, password } = this.form;
      console.log(username, email, password)
      this.authService.register(username, email, password).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          //this.replacePage()
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  
    replacePage(): void {
      window.location.replace('/menu')
    }
  
  }




    //