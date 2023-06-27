import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent {
  [x: string]: any;
  constructor(){

  }
  logout(){
    this['authService'].logout();
  }
}

