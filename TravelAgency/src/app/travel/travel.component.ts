import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { adventures } from '../adventures';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  items;
  checkoutForm;
  adventures = adventures;
  adventure;
  constructor(private route: ActivatedRoute, private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      destination: '',
      description: '',
      start_date: '',
      duration: '',
      price : ''
    });
   }
   addToCart(adventure) {
    window.alert('Your trip is almost booked!');
    this.cartService.addToCart(adventure);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.adventure = adventures[+params.get('adventureId')];
  });

    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
