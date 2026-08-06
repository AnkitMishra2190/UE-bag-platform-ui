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
    {
      label: 'Catalog',
      items: [
        { label: 'Categories', path: '/categories' },
        { label: 'Products', path: '/products' },
        { label: 'Colors', path: '/colors' },
        { label: 'Materials', path: '/materials' },
        { label: 'Sizes', path: '/sizes' },
        { label: 'Tags', path: '/tags' },
      ],
    },
    {
      label: 'CRM',
      items: [
        { label: 'Customers', path: '/customers' },
        { label: 'Companies', path: '/customer-companies' },
      ],
    },
    {
      label: 'Sales',
      items: [
        { label: 'Inquiries', path: '/inquiries' },
        { label: 'Quotations', path: '/quotations' },
        { label: 'Orders', path: '/orders' },
      ],
    },
    {
      label: 'Manufacturing',
      items: [
        { label: 'Jobs', path: '/manufacturing-jobs' },
        { label: 'Production Stages', path: '/production-stages' },
      ],
    },
    {
      label: 'Administration',
      items: [
        { label: 'Users', path: '/users' },
        { label: 'Roles', path: '/roles' },
        { label: 'Permissions', path: '/permissions' },
        { label: 'Departments', path: '/departments' },
      ],
    },
  ];

  constructor(public auth: AuthService) {}
}
