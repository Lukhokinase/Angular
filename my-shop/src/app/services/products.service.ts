import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../Item';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:3200/v1/items'
@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  

  constructor(private http: HttpClient) { }


  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl+'/products/getall')
      
  }
  
}

