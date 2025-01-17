import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    PromotionsComponent,
    CategoriesComponent,
    CustomerReviewsComponent,
    LocationComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Breizhsport';
}
