import { Component, OnInit } from '@angular/core';
import { adventures } from '../adventures';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  adventures = adventures;
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
