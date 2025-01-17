import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  featuredProducts = [
    { name: 'Chaussures de course', price: 89.99, image: '/assets/running-shoes.jpg' },
    { name: 'Ballon de football', price: 29.99, image: '/assets/football.jpg' },
    { name: 'Vélo de montagne', price: 599.99, image: '/assets/mountain-bike.jpg' },
    { name: 'Raquette de tennis', price: 79.99, image: '/assets/tennis-racket.jpg' },
  ];
}

