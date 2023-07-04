import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { BagService } from '../bag.service';
import { Item } from '../Item';

@Component({
  selector: 'app-godcart',
  templateUrl: './godcart.component.html',
  styleUrls: ['./godcart.component.css']
})
export class GodcartComponent implements OnInit{

// cartProducts: Products[] = [];
// totalQuantity: number;


  items = JSON.parse(localStorage.getItem('items') || '[]')
  total = this.bagService.totAmount
  constructor(private bagService:  BagService){}
  ngOnInit(): void {
   this.items
   this.getAllItem()
   this.calcTotal()
  }


  getAllItem(){
    
    return this.bagService.getAllItems()
  }
  calcTotal() {
    this.total = 0
    this.items.forEach((item: {qty: number, price: number}) => {
    this.total+= (item.qty * item.price)

    return this.items.reduce((acc: any, products: { num: any; }) => (acc += products.num), 0);
  });
    localStorage.setItem('items', JSON.stringify(this.items))
    localStorage.setItem('totalAmount',JSON.stringify(this.total))
}
  // calcTot(){
  //   return this.items.reduce((sum: any, prod: { num: any; }) => sum += prod.num ,0)
  // }

  delete(i:number){
    this.items.splice(i,1);
    this.calcTotal();
  }


  incrementQuantity(item: any, i: number) {
    item.qty++;
    item.calcTotal = item.price * item.qty;
    this.items.quantity  = item
    
    this.calcTotal()
  }

  decrementQuantity(item: any){
    if (item.qty > 1) {
      item.qty--;
    }
    this.calcTotal()

}


}