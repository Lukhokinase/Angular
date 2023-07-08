import { BehaviorSubject } from 'rxjs';
import { Item } from '../Item';
//import { Product } from './product-list/product-list.component';
import { Injectable, OnInit } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class BagService implements OnInit {
event: any;
findIndex(arg0: (p: any) => boolean): number {
  throw new Error('Method not implemented.');
}
  cartItemcount = new BehaviorSubject<any>(0);
  public cartTotal = new BehaviorSubject<any>(0);

  items: Item[] = [];
  
  //totalAmount = 0;
  
  totItems = 0;

//items: any[] = [];
totAmount = 0
/* . . . */

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
    this.totAmount += (item.price * item.quantity)
    //this.cartTotal.next(this.totAmount);
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
// addToCart(product: any) {
//   const productExistInCart = this.items
// .find(({itemname}) => itemname === product.itemname); // find product by name
//   if (!productExistInCart) {
//     this.items.push({...product, qty: 1} ); 
//     this.items.length
//     // enhance "porduct" opject with "num" property
//     return;
//   }
//   productExistInCart.qty += 1;
// }
getAllItems() {
  console.log(this.items)
  return this.items
};

/* . . . */
}