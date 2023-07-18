import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';
import { TokenService } from 'src/app/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-godcheckout',
  templateUrl: './godcheckout.component.html',
  styleUrls: ['./godcheckout.component.css']
})
export class GodcheckoutComponent implements OnInit {

items = JSON.parse(`${localStorage.getItem('CartItems')}`)
totalAmount = JSON.parse(`${localStorage.getItem('Total')}`)
userId:any
//items: any



  constructor(private bagService: BagService, private tokenService: TokenService, private router: Router){}

  ngOnInit(): void {

    this.retrieveCheckout()
    this.items
    this.totalAmount
    console.log(this.items)
    const user = this.tokenService.getUser()
    this.userId = user.id
    //this.items =this.totalItems.length
  }

  retrieveCheckout(): void {
     
    if(!window.sessionStorage.getItem('auth-token')){
      this.router.navigate(['/login'])
      
    }

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
    this.replacePage()
    })
  console.log(this.items[0].id)
  pid = this.items[0].id
  userId = this.userId  
  console.log(this.userId)
  }

  clearCart() {
    throw new Error('Method not implemented.');
    }

    replacePage(): void {
      this.router.navigate(['/Payment'])
    }
}

