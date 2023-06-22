import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  stripe: any | null = null;

  PRODUCT_SKU: string = "sku_H5hfH3emeikvXY";

  PUBLISHABLE_KEY: string = "pk_test_DMcLz3qQcHzlWOhTZbiIZXhY00EHVCWLY7";

  async ngOnInit(): Promise<void> {
    this.stripe = await loadStripe(this.PUBLISHABLE_KEY);
  }

  checkout(): void {
    this.stripe.redirectToCheckout({
      items: [
        { sku: this.PRODUCT_SKU, quantity: 1 }
      ],
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel"
    });
  }
}
function loadStripe(PUBLISHABLE_KEY: string): any {
  throw new Error('Function not implemented.');
}
