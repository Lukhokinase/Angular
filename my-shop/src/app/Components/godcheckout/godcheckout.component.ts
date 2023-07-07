import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-godcheckout',
  templateUrl: './godcheckout.component.html',
  styleUrls: ['./godcheckout.component.css']
})
export class GodcheckoutComponent implements OnInit {
totalItems = JSON.parse(`${localStorage.getItem('items')}`)
items: any
totalAmount = JSON.parse(`${localStorage.getItem('totalAmount')}`)
  ngOnInit(): void {
    this.totalItems
    this.items =this.totalItems.length
  }

}
