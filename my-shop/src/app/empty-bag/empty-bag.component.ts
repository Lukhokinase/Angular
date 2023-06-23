import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
selector: 'app-root',
templateUrl: './empty-cart.component.html',
styleUrls: ['./empty-cart.component.css']
})
export class EmptyCartComponent implements OnInit {

constructor(private cartService: CartService) {}

ngOnInit() {
this.cartService.getCart().subscribe(cart => {
if (cart.items.length === 0) {
this.isCartEmpty = true;
} else {
this.isCartEmpty = false;
}
});
}

amountTab() {
  return this.cartService.getCart().pipe(
    // Calculate the total amount of the cart
    map(cart => cart.totalAmount),
    // Format the amount as a currency
    map(amount => `${amount} USD`)
  );
}

}
