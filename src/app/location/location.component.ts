import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="location">
      <h2 class="section-title">Notre emplacement en Bretagne</h2>
      <div class="map-container">
        <iframe
          width="100%"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Bretagne,France">
        </iframe>
      </div>
    </section>
  `,
  styles: [`
    .location {
      padding: 4rem 0;
    }
    .map-container {
      width: 100%;
      height: 450px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class LocationComponent {}

