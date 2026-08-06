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
      { path: 'products', component: PlaceholderPageComponent, data: { title: 'Products' } },
      { path: 'colors', component: GenericCrudPageComponent, data: { config: COLOR_CONFIG } },
      { path: 'materials', component: GenericCrudPageComponent, data: { config: MATERIAL_CONFIG } },
      { path: 'sizes', component: GenericCrudPageComponent, data: { config: SIZE_CONFIG } },
      { path: 'tags', component: GenericCrudPageComponent, data: { config: TAG_CONFIG } },

      // ---------- CRM ----------
      { path: 'customers', component: PlaceholderPageComponent, data: { title: 'Customers' } },
      { path: 'customer-companies', component: PlaceholderPageComponent, data: { title: 'Customer Companies' } },

      // ---------- Sales ----------
      { path: 'inquiries', component: PlaceholderPageComponent, data: { title: 'Inquiries' } },
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
