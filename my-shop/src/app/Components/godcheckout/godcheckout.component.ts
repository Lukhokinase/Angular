import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-godcheckout',
  templateUrl: './godcheckout.component.html',
  styleUrls: ['./godcheckout.component.css']
})
export class GodcheckoutComponent implements OnInit {

items = JSON.parse(`${localStorage.getItem('CartItems')}`)
count = JSON.parse(`${localStorage.getItem('Count')}`)
userId:any
//items: any
totalAmount = JSON.parse(`${localStorage.getItem('TotalAmount')}`)


  constructor(private bagService: BagService, private tokenService: TokenService){}

  ngOnInit(): void {
    this.items
    const user = this.tokenService.getUser()
    this.userId = user.id
    //this.items =this.totalItems.length
  }

  postToCart(){
    let pid;
    let userId = this.userId
    this.items.forEach((items:{id:any})=>{
      pid = items.id
      console.log(pid)
      this.bagService.sendToCart({pid, userId}).subscribe({
      next(data){
        console.log(data)
      },
    })
    })
  //console.log(this.items[0].id)
  //const pid = this.items[0].id
  // const userId = this.userId  
  // console.log(this.userId)
  }

  clearCart() {
    throw new Error('Method not implemented.');
    }
}
