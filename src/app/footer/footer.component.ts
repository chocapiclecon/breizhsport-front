import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="#">À propos</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">CGU</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Suivez-nous</h3>
            <div class="social-icons">
              <a href="#" aria-label="Facebook"><mat-icon>facebook</mat-icon></a>
              <a href="#" aria-label="Instagram"><mat-icon>instagram</mat-icon></a>
              <a href="#" aria-label="Twitter"><mat-icon>twitter</mat-icon></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p>123 Rue du Sport, 29000 Quimper</p>
            <p>Tél : 02 98 00 00 00</p>
            <p>Email : contact&#64;breizhsport.com</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Breizhsport. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--primary-color);
      color: white;
      padding: 3rem 0 1rem;
    }
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .footer-section {
      flex: 1;
      margin-bottom: 2rem;
      min-width: 200px;
    }
    .footer-section h3 {
      margin-bottom: 1rem;
    }
    .footer-section ul {
      list-style-type: none;
      padding: 0;
    }
    .footer-section ul li {
      margin-bottom: 0.5rem;
    }
    .footer-section a {
      color: white;
      text-decoration: none;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1rem;
      text-align: center;
    }
  `]
})
export class FooterComponent {}

