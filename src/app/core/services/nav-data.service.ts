import { Injectable } from '@angular/core';
import { NavItem } from '../models/nav-item.model';

// Structure adapted from the reference site (unickenterprises.com) for the
// Home/About/Products/Contact backbone, extended with the additional
// modules the spec requires (Industries, Blog, Gallery, Certifications,
// Downloads) that the reference site does not have. Real category/product
// data will replace these placeholders once the Products module (Phase 5)
// and Admin CMS are built.


@Injectable({
  providedIn: 'root',
})
export class NavDataService {

  readonly mainNav: NavItem[] = [
    {
      label: 'Home',
      path: '/',
      icon: 'home',
    },

    {
      label: 'About Us',
      path: '/about',
      icon: 'business',
    },

    {
      label: 'Products-Categories',
      path: '/categories',
      icon: 'inventory_2',
      children: [
        // {
        //   label: 'Regular Handbags',
        //   path: '/products/regular-handbags',
        // },
        // {
        //   label: 'Party Wear Handbags',
        //   path: '/products/party-wear-handbags',
        // },
        // {
        //   label: 'Sling Bags',
        //   path: '/products/sling-bags',
        // },
        // {
        //   label: 'School Bags',
        //   path: '/products/school-bags',
        // },
      ],
    },

    {
      label: 'Industries We Serve',
      path: '/industries',
      icon: 'factory',
    },

    // {
    //   label: 'Blog',
    //   path: '/blog',
    //   icon: 'article',
    // },

    {
      label: 'Gallery',
      path: '/gallery',
      icon: 'photo_library',
    },

    {
      label: 'Contact Us',
      path: '/contact',
      icon: 'contact_mail',
    },

    {
      label: 'Login',
      path: '/login',
      icon: 'account_circle',
    },
  ];


  readonly footerQuickLinks: NavItem[] = [
    {
      label: 'Home',
      path: '/',
      icon: 'home',
    },
    {
      label: 'About Us',
      path: '/about',
      icon: 'business',
    },
    {
      label: 'Products',
      path: '/products',
      icon: 'inventory_2',
    },
    {
      label: 'Certifications',
      path: '/certifications',
      icon: 'verified',
    },
    {
      label: 'Downloads',
      path: '/downloads',
      icon: 'download',
    },
    {
      label: 'Contact Us',
      path: '/contact',
      icon: 'contact_mail',
    },
  ];


  readonly footerProductLinks: NavItem[] = [
    {
      label: 'Regular Handbags',
      path: '/products/regular-handbags',
      icon: 'shopping_bag',
    },
    {
      label: 'Party Wear Handbags',
      path: '/products/party-wear-handbags',
      icon: 'shopping_bag',
    },
    {
      label: 'Sling Bags',
      path: '/products/sling-bags',
      icon: 'local_mall',
    },
    {
      label: 'School Bags',
      path: '/products/school-bags',
      icon: 'backpack',
    },
  ];


  readonly contact = {
    phones: [
      '+91-8178460874',
      '+91-8700231031',
    ],

    address:
      'A-89 Street No-1, Prem Nagar - Ist, Kirari Suleman Nagar, Delhi -110086',

    email: 'info@example.com',
  };


  readonly socialLinks = [
    {
      label: 'Facebook',
      url: '#',
    },
    {
      label: 'Instagram',
      url: '#',
    },
    {
      label: 'LinkedIn',
      url: '#',
    },
  ];


  readonly whatsappNumber = '918178460874';
}
