import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})

export class bagComponent implements OnInit {
   items = JSON.parse(localStorage.getItem('items') || '[]')

  constructor(private bagService:  BagService){}
  ngOnInit(): void {
   this.items
   this.getAllItem()
  }


  getAllItem(){
    
    return this.bagService.getAllItems()
  }
}
