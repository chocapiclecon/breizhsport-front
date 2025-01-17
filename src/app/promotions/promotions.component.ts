import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatBadgeModule, MatButtonModule],
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
  promotions = [
    { name: 'Ensemble fitness', originalPrice: 129.99, promoPrice: 99.99, image: '/assets/fitness-set.jpg', isNew: true },
    { name: 'Sac de sport', originalPrice: 49.99, promoPrice: 39.99, image: '/assets/sport-bag.jpg', isNew: false },
    { name: 'Montre connectée', originalPrice: 199.99, promoPrice: 149.99, image: '/assets/smartwatch.jpg', isNew: false },
  ];
}

