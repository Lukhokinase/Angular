import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  
  totalItems = JSON.parse(`${localStorage.getItem('items')}`)
  items: any
  totalAmount = JSON.parse(`${localStorage.getItem('totalAmount')}`)
    ngOnInit(): void {
      this.totalItems
      this.items =this.totalItems.length
    } 
 

}
