import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../services/products.service';
import { BagService } from '../bag.service';
//import { CartService } from '../cart.service';

@Component({
  selector: 'app-menuof-god',
  templateUrl: './menuof-god.component.html',
  styleUrls: ['./menuof-god.component.css']
})
export class MenuofGodComponent implements OnInit {
  products: Item[]= []
  title=""
  items= this.bagService.items

 
  constructor(private productService: ProductsService, private bagService: BagService){
    // private cartService: CartService


  }
  ngOnInit(): void {
    this.getAllItems()
  }

 addToCart(item: Item) {
    this.bagService.addToCart(item);
    window.alert('Your product has been added to the cart!');
    console.log(this.items)
    localStorage.setItem("items",JSON.stringify(this.items))
  }
  getAllItems(){
    this.productService.getAllItems().subscribe((data)=>{
      this.products = data
      console.log(data)
    })
  }
}