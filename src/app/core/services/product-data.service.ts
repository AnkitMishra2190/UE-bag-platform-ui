import { Injectable, signal } from '@angular/core';

import { 
  ProductCategory, 
  CategoryProduct, 
  CATEGORIES 
} from '../pages/categories/data/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  // =====================================================
  // CATEGORY / PRODUCT DATA
  // =====================================================

  private readonly categoriesSignal = signal<ProductCategory[]>(CATEGORIES);

  // =====================================================
  // PUBLIC READ-ONLY SIGNAL
  // =====================================================

  readonly categories = this.categoriesSignal.asReadonly();

  // =====================================================
  // GET CATEGORY
  // =====================================================

  getCategory(categorySlug: string): ProductCategory | null {
    return this.categoriesSignal().find(
      category => category.slug === categorySlug
    ) ?? null;
  }

  // =====================================================
  // GET PRODUCT
  // =====================================================

  getProduct(
    categorySlug: string,
    productSlug: string
  ): CategoryProduct | null {
    const category = this.getCategory(categorySlug);

    if (!category) {
      return null;
    }

    return category.products.find(
      product => product.slug === productSlug
    ) ?? null;
  }

  // =====================================================
  // GET CATEGORY + PRODUCT TOGETHER
  // =====================================================

  getCategoryAndProduct(
    categorySlug: string,
    productSlug: string
  ): {
    category: ProductCategory | null;
    product: CategoryProduct | null;
  } {
    const category = this.getCategory(categorySlug);

    if (!category) {
      return {
        category: null,
        product: null
      };
    }

    const product = category.products.find(
      item => item.slug === productSlug
    ) ?? null;

    return {
      category,
      product
    };
  }

}