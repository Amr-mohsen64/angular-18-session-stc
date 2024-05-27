import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  styles: `
      nav {
      background-color: #333;
      padding: 1rem;
      border-radius: 8px;
    
      ul {
        display: flex;
        gap: 10px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    
      li {
        a {
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background-color 0.3s, color 0.3s;
    
          &:hover {
            background-color: #555;
            color: #ffcc00;
          }
    
          &.active {
            background-color: #ffcc00;
            color: #333;
          }
        }
      }
    }
  `,
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/zoneless" routerLinkActive="active">Zoneless</a>
        </li>
        <li>
          <a routerLink="/fallback" routerLinkActive="active">Fallback</a>
        </li>
        <li><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
        <li><a routerLink="/input" routerLinkActive="active">Input</a></li>
        <li><a routerLink="/form" routerLinkActive="active">Form</a></li>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
