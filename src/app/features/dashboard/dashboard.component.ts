import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h1>Welcome back{{ auth.user()?.name ? ', ' + auth.user()?.name : '' }}</h1>
    <p class="text-muted" style="margin-top: 8px;">
      This is the foundation shell. Each module (Products, Customers, Inquiries, Orders...) will get its own page here as it's built.
    </p>
  `,
})
export class DashboardComponent {
  constructor(public auth: AuthService) {}
}
