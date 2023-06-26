import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-menuof-god',
  templateUrl: './menuof-god.component.html',
  styleUrls: ['./menuof-god.component.css']
})
export class MenuofGodComponent implements OnInit {
  products: Item[]= []
  title=""
  constructor(private productService: ProductsService){

  }
  ngOnInit(): void {
    this.getAllItems()
  }

  getAllItems(){
    this.productService.getAllItems().subscribe((data)=>{
      this.products = data
      console.log(data)
    })
  }
}