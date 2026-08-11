import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../core/models/nav-item.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss',
})
export class MegaMenuComponent {
  items = input.required<NavItem[]>();
  vertical = input<boolean>(false); // true = mobile drawer layout
}
