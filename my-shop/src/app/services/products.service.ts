import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../Item';
import { Observable, catchError, map } from 'rxjs';


//const apiUrl = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v1/items'
const apiUrl = 'http://localhost:8080/api/products/'
@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  Url: any;
  items:Item[]=[];
  

  constructor(private http: HttpClient) { }

 
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl)
      
  };
  
  getOne(id:any): Observable<Item> {
    return this.http.get<Item>(apiUrl+ '/'+ id)
  }

  deleteOne(id: any):Observable<any>{
    return this.http.get<any>(apiUrl + '/:id')
  }
 

}
