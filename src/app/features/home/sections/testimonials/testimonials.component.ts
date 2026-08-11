import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Testimonial } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  // Real testimonials managed via Admin > Testimonials CRUD (spec's
  // "Testimonials" admin module) once the CMS backend exists.
  readonly testimonials: Testimonial[] = [
    {
      quote: 'Consistent quality and on-time delivery every single order. Our go-to manufacturing partner for three years running.',
      author: 'Rohan Mehta',
      role: 'Procurement Head, RetailCo',
    },
    {
      quote: 'Their custom design team turned our brief into production-ready samples faster than any other vendor we tried.',
      author: 'Sana Kapoor',
      role: 'Founder, StyleHub',
    },
    {
      quote: 'Export documentation and shipping were handled smoothly — genuinely painless international sourcing.',
      author: 'David Chen',
      role: 'Buyer, GlobalTrade Imports',
    },
  ];
}
