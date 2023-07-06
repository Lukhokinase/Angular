import { Injectable } from '@angular/core';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const apiUrl = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v2/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url: any;
  user:User[]=[];
  constructor(private http: HttpClient) { }

  
  register(user: User) { 
    this.user.push(user);
  }
 
  // login(id:any): Observable<User> {
  //   return this.http.get<User>(apiUrl+ '/signin')
  // }
  login(user: User) {
    this.user.push(user)
  }

  deleteOne(id: any):Observable<any>{
    return this.http.get<any>(apiUrl + '/:id')
  }

}
