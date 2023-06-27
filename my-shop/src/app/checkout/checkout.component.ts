import { Component, Input } from "@angular/core";


@Component({
  selector: "checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent {
  // stripe: Stripe | null = null;

  // // START HERE: https://stripe.com/docs/payments/checkout/client

  // // AFTER FINISHING: https://stripe.com/docs/payments/checkout/client#create-products
  // // Paste the product SKU:
  // PRODUCT_SKU: string = "sku_H5hfH3emeikvXY";

  // // Copy this from the dashboard: https://dashboard.stripe.com/test/apikeys
  // PUBLISHABLE_KEY: string = "pk_test_DMcLz3qQcHzlWOhTZbiIZXhY00EHVCWLY7";

  async ngOnInit(): Promise<void> {
    // this.stripe = await loadStripe(this.PUBLISHABLE_KEY);
  }

  // checkout(): void {
  //   this.stripe.redirectToCheckout({
  //     items: [
  //       { sku: this.PRODUCT_SKU, quantity: 1 }
  //     ],
  //     successUrl: "https://example.com/success",
  //     cancelUrl: "https://example.com/cancel"
  //   });
  // }
}

