import { Component, OnInit } from '@angular/core';
import { adventures } from '../adventures';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adventures = adventures;
  constructor() { }

  ngOnInit(): void {
  }

}
