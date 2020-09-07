import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { adventures } from '../adventures';

@Component({
  selector: 'app-adventures-details',
  templateUrl: './adventures-details.component.html',
  styleUrls: ['./adventures-details.component.css']
})
export class AdventuresDetailsComponent implements OnInit {
  adventure;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  
  addToCart(adventure) {
    window.alert('Your trip is almost booked!');
    this.cartService.addToCart(adventure);
  }
 

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.adventure = adventures[+params.get('adventureId')];
  });
  }
}
