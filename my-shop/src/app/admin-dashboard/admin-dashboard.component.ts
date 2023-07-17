import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../services/products.service';
import { BagService } from '../services/bag.service';
import { TokenService } from 'src/app/services/token.service';
import { HttpClient } from '@angular/common/http';


const apiUrl = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v1/items/'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
  products: Item[]= []
  product?: Item
  title=""
  items= this.bagService.items
  totalAmount = 0;
  isLoggedIn: boolean=false;
  username: any;

  newItem: Item = {
    price: 0,
    itemname: "",
    category: "",
    details: "",
    picture: "",
    quantity: 1,
    id: ""
  }

  selected = false

 
  constructor(
    private productService: ProductsService, 
    private bagService: BagService, 
    private tokenStorage: TokenService, 
    ){
    // private cartService: CartService


  }
  ngOnInit(): void {
    this.totalAmount = this.bagService.totAmount;
    this.getAllItems()

    this.isLoggedIn = !!this.tokenStorage.getToken()
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser()
      this.username = user.username
      console.log(this.username)
    }
  }

  delete(id:any){
    this.productService.deleteOne(id).subscribe({
      next: data => {
        console.log(data)
        this.reload()
      },
      error: e => {
        console.error(e.error)
      }
    })
  }

  add(){
    this.productService.addItem(this.newItem).subscribe({
      next: data => {
        console.log(data)
        this.selected = false
        this.reload()
      },
      error: e => {
        console.error(e.error.message)
      }
    })
  }

  selectAdd(){
    this.selected = true
  }

  reload(){
    window.location.reload()
  }

 
  getAllItems(){
    this.productService.getAllItems().subscribe((data)=>{
      this.products = data
      console.log(data)
    })
  }
  getTotal(){
    this.bagService.getAllItems();
  }

//   /** PUT: update the hero on the server */

  


}

