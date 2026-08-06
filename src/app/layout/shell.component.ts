import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

interface NavItem {
  label: string;
  path: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  // Grows one module at a time as each feature area gets its own
  // page — matching how server.js grows route-by-route. No dead links.
  readonly navGroups: NavGroup[] = [
    {
      label: 'Overview',
      items: [{ label: 'Dashboard', path: '/dashboard' }],
    },
  ];

  constructor(public auth: AuthService) {}
}
