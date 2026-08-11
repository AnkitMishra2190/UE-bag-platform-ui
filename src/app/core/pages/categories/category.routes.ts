import { Routes } from '@angular/router';

export const CATEGORY_ROUTES: Routes = [

  // =====================================================
  // CATEGORY LIST
  // /categories
  // =====================================================

  {
    path: '',
    loadComponent: () =>
      import('./categories.component')
        .then(m => m.CategoriesComponent)
  },


  // =====================================================
  // CATEGORY PRODUCTS
  // /categories/regular-handbags
  // =====================================================

  {
    path: ':category',
    loadComponent: () =>
      import('./category-product-details/category-product-details.component')
        .then(m => m.CategoryProductDetailsComponent)
  },


  // =====================================================
  // PRODUCT DETAILS
  // /categories/regular-handbags/croco-pocket-grey
  // =====================================================

//   {
//     path: ':category/:product',
//     loadComponent: () =>
//       import('./product-details/product-details.component')
//         .then(m => m.ProductDetailsComponent)
//   }

];