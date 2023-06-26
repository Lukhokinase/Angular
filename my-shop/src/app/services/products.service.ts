import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../Item';
import { Observable, catchError, map } from 'rxjs';


const apiUrl = 'http://localhost:3200/v1/items'
@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  Url: any;
  items:Item[]=[];
  

  constructor(private http: HttpClient) { }

  addToCart(product: Item) {
    
    this.items.push(product);
  }
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl+'/products/getall')
      
  };
  
  getOne(id:any): Observable<Item> {
    return this.http.get<Item>(apiUrl + '/:id')
  }

  deleteOne(id: any):Observable<any>{
    return this.http.get<any>(apiUrl + '/:id')
  }
 

    }
