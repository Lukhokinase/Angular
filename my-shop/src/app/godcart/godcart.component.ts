import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-godcart',
  templateUrl: './godcart.component.html',
  styleUrls: ['./godcart.component.css']
})
export class GodcartComponent implements OnInit{
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
      
      console.log(this.total)

      // return this.products.reduce((acc, prod) => (acc += prod.num), 0);
    });
    localStorage.setItem('items', JSON.stringify(this.items))
    localStorage.setItem('totalAmount',JSON.stringify(this.total))
  }
  calcTot(){
    return this.items.reduce((acc: any, prod: { num: any; }) => (acc += prod.num), 0);
  }

  delete(i:number){
    this.items.splice(i,1);
    this.calcTotal();
  }
  updateQty(_$event: any){
    this.calcTotal()
  }

  increment(qty:any, i: number){
    qty++;
    this.items[i].qty = qty
    this.calcTotal()
  }

}