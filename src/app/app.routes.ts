import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { GenericCrudPageComponent } from './shared/generic-crud/generic-crud-page.component';
import { PlaceholderPageComponent } from './shared/components/placeholder/placeholder-page.component';
import {
  COLOR_CONFIG,
  MATERIAL_CONFIG,
  SIZE_CONFIG,
  DEPARTMENT_CONFIG,
  TAG_CONFIG,
  PRODUCTION_STAGE_CONFIG,
} from './shared/generic-crud/generic-crud.configs';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },

    {
    path: 'about',
    loadComponent: () =>
      import('../app/core/pages/about/about.component')
        .then(m => m.AboutComponent),
    data: {
      title: 'About Us'
    }
  },


  {
    path: 'categories',
    loadChildren: () =>
      import('../app/core/pages/categories/category.routes')
        .then(m => m.CATEGORY_ROUTES)
  },

  {
    path: 'categories/:category/:product',
    loadComponent: () =>
      import('../app/core/pages/categories/product-details/product-details.component')
        .then(m => m.ProductDetailsComponent)
  },


  {
    path: 'industries',
    loadComponent: () =>
      import('../app/features/home/sections/industries/industries.component')
        .then(m => m.IndustriesComponent),
    data: {
      title: 'Contact Us'
    }
  },

  // { path: 'gallery', loadComponent: comingSoon, data: { title: 'Gallery' } },

  {
    path: 'contact',
    loadComponent: () =>
      import('../app/core/pages/contact/contact.component')
        .then(m => m.ContactComponent),
    data: {
      title: 'Contact Us'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    loadComponent: () => import('./layout/shell.component').then((m) => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },

      // ---------- Catalog ----------
      {
        path: 'categories',
        loadComponent: () =>
          import('./features/categories/category-list.component').then((m) => m.CategoryListComponent),
      },
      { path: 'products', loadComponent: () => import('./features/products/product-list.component').then((m) => m.ProductListComponent) },
      { path: 'colors', component: GenericCrudPageComponent, data: { config: COLOR_CONFIG } },
      { path: 'materials', component: GenericCrudPageComponent, data: { config: MATERIAL_CONFIG } },
      { path: 'sizes', component: GenericCrudPageComponent, data: { config: SIZE_CONFIG } },
      { path: 'tags', component: GenericCrudPageComponent, data: { config: TAG_CONFIG } },

      // ---------- CRM ----------
      {
        path: 'customers',
        loadComponent: () =>
          import('./features/customers/customer-list.component').then((m) => m.CustomerListComponent),
      },
      {
        path: 'customer-companies',
        loadComponent: () =>
          import('./features/customer-companies/customer-company-list.component').then(
            (m) => m.CustomerCompanyListComponent
          ),
      },

      // ---------- Sales ----------
      {
        path: 'inquiries',
        loadComponent: () =>
          import('./features/inquiries/inquiry-list.component').then((m) => m.InquiryListComponent),
      },
      { path: 'quotations', component: PlaceholderPageComponent, data: { title: 'Quotations' } },
      { path: 'orders', component: PlaceholderPageComponent, data: { title: 'Orders' } },

      // ---------- Manufacturing ----------
      { path: 'manufacturing-jobs', component: PlaceholderPageComponent, data: { title: 'Manufacturing Jobs' } },
      {
        path: 'production-stages',
        component: GenericCrudPageComponent,
        data: { config: PRODUCTION_STAGE_CONFIG },
      },

      // ---------- Administration ----------
      { path: 'users', component: PlaceholderPageComponent, data: { title: 'Users' } },
      { path: 'roles', component: PlaceholderPageComponent, data: { title: 'Roles' } },
      { path: 'permissions', component: PlaceholderPageComponent, data: { title: 'Permissions' } },
      { path: 'departments', component: GenericCrudPageComponent, data: { config: DEPARTMENT_CONFIG } },

      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
