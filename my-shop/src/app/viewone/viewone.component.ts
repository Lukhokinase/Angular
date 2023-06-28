import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-viewone',
  templateUrl: './viewone.component.html',
  styleUrls: ['./viewone.component.css']
})
export class ViewoneComponent implements OnInit{
  product:any
  constructor( private route: ActivatedRoute, private productService: ProductsService){
  
  }
  ngOnInit(): void {
    this.getItem()
  }

  getItem(): void {
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.productService.getOne(id)
      .subscribe(item => this.product = item);
  }

}
