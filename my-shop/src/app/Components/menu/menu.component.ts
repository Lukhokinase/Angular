import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Item } from '../../Item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Item: Item[] = [];
 

  products = []
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
 this.product.getAllItems().subscribe(data => {
  // this.products= data
  console.log(data)
 })
}

}
