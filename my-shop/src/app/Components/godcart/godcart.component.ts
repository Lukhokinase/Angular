import { Component, OnInit} from '@angular/core';
import { BagService } from '../../services/bag.service';
import { Item } from '../../Item';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-godcart',
  templateUrl: './godcart.component.html',
  styleUrls: ['./godcart.component.css']
})

export class GodcartComponent implements OnInit{

  items = JSON.parse(localStorage.getItem('CartItems') || '[]')
  totalAmount = JSON.parse(localStorage.getItem('totalAmount') || '[]')
  userId: any;
  cartTotal: any;
  
  // totalAmount: this.bagService.totAmount

  constructor(private bagService:  BagService, private tokenStorage: TokenService){}
  ngOnInit(): void {
   this.items
   this.getAllItem()
   this.cartTotal = this.bagService.getTotal();
   const user = this.tokenStorage.getUser()
   this.userId = user.id
  }


  getAllItem(){
    
    return this.bagService.getAllItems()
  }
  
  Total() {
    this.totalAmount = 0
    this.items.forEach((item: {quantity: number, price: number}) => {
    this.totalAmount += (item.quantity * item.price)

    return this.items.reduce((acc: any, products: { num: any; }) => (acc += products.num), 0);
  });
    
    localStorage.setItem('CartItems', JSON.stringify(this.items))
    localStorage.setItem('TotalAmount',JSON.stringify(this.totalAmount))
}


  delete(i:number){
    this.items.splice(i,1);
    this.getTotal();

    localStorage.setItem('CartItems', JSON.stringify(this.items))
    localStorage.setItem('TotalAmount',JSON.stringify(this.cartTotal))
  }

getTotal(){
  return this.cartTotal
}
  incrementQuantity(item: any, i: number) {
    item.quantity++;
    item.calcTotal = item.price 
    this.items.quantity  = item
    this.getTotal();
  }

  decrementQuantity(item: any){
    if (item.quantity > 1) {
      item.quantity--;
    }
    this.getTotal();

}



// 


// postToCart(){
//   let pid;
//   let userId = this.userId
//   this.items.forEach((items:{id:any})=>{
//     pid = items.id
//     console.log(pid)
//     this.bagService.sendToCart({pid, userId}).subscribe({
//     next(data){
//       console.log(data)
//     },
//   })
//   })
// console.log(this.items[0].id)
//  pid = this.items[0].id
// userId = this.userId  
// console.log(this.userId)


  

}