import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [
    { name: 'Fitness', image: '/assets/fitness-category.jpg' },
    { name: 'Football', image: '/assets/football-category.jpg' },
    { name: 'Randonnée', image: '/assets/hiking-category.jpg' },
    { name: 'Cyclisme', image: '/assets/cycling-category.jpg' },
  ];
}

