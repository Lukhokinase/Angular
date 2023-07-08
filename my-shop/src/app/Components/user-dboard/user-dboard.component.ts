import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-dboard',
  templateUrl: './user-dboard.component.html',
  styleUrls: ['./user-dboard.component.css']
})
export class UserDBoardComponent implements OnInit{
  
  username?: string
  isLoggedIn: boolean= false;
  
  constructor(private tokenStorage :TokenService){}
  
  ngOnInit(): void {
    //this.getShops()
    this.isLoggedIn = !!this.tokenStorage.getToken()
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser()
      this.username = user.username
    }
    //throw new Error('Method not implemented.');
  }

}
