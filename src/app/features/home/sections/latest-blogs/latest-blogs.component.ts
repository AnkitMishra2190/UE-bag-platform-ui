import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BlogPreview } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-latest-blogs',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './latest-blogs.component.html',
  styleUrl: './latest-blogs.component.scss',
  
})
export class LatestBlogsComponent {
  readonly posts: BlogPreview[] = [
    {
      title: 'How to Choose the Right Bag Manufacturer for Bulk Orders',
      excerpt: 'Key factors retailers should evaluate before committing to a bulk manufacturing partner.',
      date: 'July 2026',
      slug: 'choosing-the-right-manufacturer',
    },
    {
      title: '5 Fabric Trends Shaping Bag Manufacturing in 2026',
      excerpt: 'From recycled polyester to vegan leather — what buyers are asking for this year.',
      date: 'June 2026',
      slug: 'fabric-trends-2026',
    },
    {
      title: 'A Guide to Export Documentation for First-Time Buyers',
      excerpt: 'Everything international buyers need to know before placing their first export order.',
      date: 'May 2026',
      slug: 'export-documentation-guide',
    },
  ];
}
