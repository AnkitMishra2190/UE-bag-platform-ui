import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

    categories = [
        {
            name: 'Regular HandBag',
            description:
            'Elegant and practical handbags designed for everyday use, combining style, functionality, and comfort.',
            icon: 'shopping_bag',
            path: '/categories/regular-handbags'
        },

        {
            name: 'PartyWear Handbag',
            description:
            'Stylish handbags designed for parties, celebrations, weddings, and special occasions.',
            icon: 'auto_awesome',
            path: '/categories/partywear-handbags'
        },

        {
            name: 'Sling Bags',
            description:
            'Compact and fashionable sling bags designed for convenient everyday carrying.',
            icon: 'style',
            path: '/categories/sling-bags'
        },

        {
            name: 'School Bags',
            description:
            'Durable and practical bags designed for comfortable everyday carrying.',
            icon: 'backpack',
            path: '/categories/school-bags'
        }
    ];

}