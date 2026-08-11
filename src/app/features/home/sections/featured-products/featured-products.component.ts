import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProductPreview } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent {
  // Placeholder mock data — replaced by a ProductService HTTP call
  // against the Admin CMS's /api/products?featured=true in Phase 5.
  readonly products: ProductPreview[] = [
    { id: 'p1', name: 'Classic Tote Handbag', category: 'Regular Handbags', icon: 'shopping_bag' },
    { id: 'p2', name: 'Evening Clutch', category: 'Party Wear Handbags', icon: 'diamond' },
    { id: 'p3', name: 'Urban Sling Bag', category: 'Sling Bags', icon: 'work' },
    { id: 'p4', name: 'Classic Backpack', category: 'School Bags', icon: 'backpack' },
  ];
}
