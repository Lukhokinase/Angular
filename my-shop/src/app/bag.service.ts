import { Item } from './Item';
// import { Product } from './product-list/product-list.component';
import { Injectable, OnInit } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class BagService implements OnInit {

items: any[] = [];
totAmount = 0
/* . . . */

ngOnInit(): void {
this.getAllItems()
}

addToCart(product: any) {
  const productExistInCart = this.items
.find(({itemname}) => itemname === product.itemname); // find product by name
  if (!productExistInCart) {
    this.items.push({...product, qty: 1} ); 
    this.items.length
    // enhance "porduct" opject with "num" property
    return;
  }
  productExistInCart.qty += 1;
}
getAllItems() {
  console.log(this.items)
  return this.items
};

/* . . . */
}