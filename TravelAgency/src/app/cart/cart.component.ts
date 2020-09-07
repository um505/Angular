import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum = 0;
  disc = 0;
  items;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  	 this.items = this.cartService.getItems();
  	 for (let item of this.items){
  	 	this.sum += Number(item.price)
  	 }
  	 if (this.sum < 200){
  	 	this.disc = this.sum
  	 } else if (this.sum < 500){
  	 	this.disc = this.sum - this.sum * 0.1
  	 }
  	 else {
  	 	this.disc = this.sum - this.sum * 0.2
  	 }

  }
}