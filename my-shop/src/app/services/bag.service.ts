import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../Item';
import { HttpClient } from '@angular/common/http';
//import { Product } from './product-list/product-list.component';
import { Injectable, OnInit } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class BagService implements OnInit {
  getItems() {
    throw new Error('Method not implemented.');
  }
// const User_api = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v2/users/';
 auth_api = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/api/auth/'
//  auth_api = 'https://localhost:3200'
  
  cartItemcount = new BehaviorSubject<any>(0);
  public cartTotal = new BehaviorSubject<any>(0);

  items: Item[] = [];
  
  //totalAmount = 0;
  
  totItems = 0;

//items: any[] = [];
totAmount = 0
/* . . . */
  constructor(private http: HttpClient){}
ngOnInit(): void {
this.getAllItems()
}
addToCart(product: any ) {
      
  const productExistInCart = this.items.find(({itemname}) => itemname === product.itemname);
  if (!productExistInCart) {
  this.items.push({...product}); 
  this.items.length;
  this.cartItemcount.next(this.cartItemcount.value + 1);
  JSON.stringify(localStorage.setItem('Count',this.cartItemcount.value + 1))
  return;
 }

 productExistInCart.quantity! = productExistInCart.quantity! + 1;
 this.cartItemcount.next(this.cartItemcount.value + 1);
 console.log(productExistInCart.quantity)
 
 }

 Total() {
    
  this.totAmount = 0
  this.items.forEach((item:any) => {
    this.totAmount += (item.price)
    this.cartTotal.next(this.totAmount);
    console.log(this.totAmount)
    localStorage.setItem('TotalAmount',JSON.stringify(this.totAmount))
  })
  
  this.cartTotal.next(this.totAmount);
  localStorage.setItem('CartItems', JSON.stringify(this.items))
  
}

  getCount(){
    return this.cartItemcount;
  }

  getTotal(){
    
    return this.cartTotal;
  }

  getAllItems() {
    console.log(this.items)
    return this.items
  };

  sendToCart(payload: any):Observable<any>{
    return this.http.post<any>(this.auth_api,payload)
  }

  getUserCart():Observable<any>{
    return this.http.get<any>(this.auth_api)
  }

  delete(i:number){
    this.items.splice(i,1);
    this.getTotal();

    localStorage.setItem('CartItems', JSON.stringify(this.items))
    localStorage.setItem('TotalAmount',JSON.stringify(this.cartTotal))
  }

  
}