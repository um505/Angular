import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 items = [];
 constructor() { }

 addToCart(adventure) {
   this.items.push(adventure);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }
}