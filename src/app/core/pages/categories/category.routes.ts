import { Routes } from '@angular/router';

// Adjust these imports to match your exact file structure if necessary
import { CategoriesComponent } from './categories.component';
import { CategoryProductDetailsComponent } from './category-product-details/category-product-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const CATEGORY_ROUTES: Routes = [
  {
    // Route for the main categories list (e.g., /categories)
    path: '',
    component: CategoriesComponent,
    title: 'Categories'
  },
  {
    // Route for a specific category (e.g., /categories/regular-handbags)
    path: ':category',
    component: CategoryProductDetailsComponent
  },
  {
    // Route for a specific product within a category (e.g., /categories/regular-handbags/croco-pocket-grey)
    // The parameters :category and :product MUST match what you are getting in ProductDetailsComponent
    path: ':category/:product',
    component: ProductDetailsComponent
  }
];