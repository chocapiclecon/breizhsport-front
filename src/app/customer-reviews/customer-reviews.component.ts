import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section class="customer-reviews">
      <h2 class="section-title">Avis clients</h2>
      <div class="review-grid">
        <mat-card *ngFor="let review of reviews" class="review-card">
          <mat-card-header>
            <img mat-card-avatar [src]="review.avatar" [alt]="review.name">
            <mat-card-title>{{ review.name }}</mat-card-title>
            <mat-card-subtitle>
              <span class="stars">{{ '★'.repeat(review.rating) }}</span>
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>{{ review.comment }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`
    .customer-reviews {
      padding: 4rem 0;
      background-color: #f5f5f5;
    }
    .review-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .review-card {
      height: 100%;
    }
    .stars {
      color: gold;
    }
  `]
})
export class CustomerReviewsComponent {
  reviews = [
    { name: 'Marie L.', rating: 5, comment: 'Excellent service et produits de qualité !', avatar: '/assets/avatar1.jpg' },
    { name: 'Pierre D.', rating: 4, comment: 'Très satisfait de mon achat, livraison rapide.', avatar: '/assets/avatar2.jpg' },
    { name: 'Sophie M.', rating: 5, comment: 'Les conseils des vendeurs sont top, je recommande !', avatar: '/assets/avatar3.jpg' },
  ];
}

