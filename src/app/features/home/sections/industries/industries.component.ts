import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Industry } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',

})
export class IndustriesComponent {
  readonly industries: Industry[] = [
    { name: 'Retail Chains', icon: 'storefront', description: 'Bulk supply for retail and department stores.' },
    { name: 'Corporate Gifting', icon: 'redeem', description: 'Custom-branded bags for corporate gifting programs.' },
    { name: 'Fashion Brands', icon: 'styler', description: 'Private-label manufacturing for fashion labels.' },
    { name: 'Educational Institutions', icon: 'school', description: 'School bags supplied at institutional scale.' },
    { name: 'Export & Distribution', icon: 'public', description: 'International shipping to distributors worldwide.' },
    { name: 'E-commerce Sellers', icon: 'local_shipping', description: 'Reliable stock for online marketplace sellers.' },
  ];
}
