import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { BackButtonComponent } from '../../../../shared/components/back-button/back-button.component';

import {
  ProductDataService,
  ProductCategory,
  CategoryProduct
} from '../../../../core/services/product-data.service';


@Component({
  selector: 'app-product-details',
  standalone: true,

  imports: [
    RouterLink,
    MatIconModule,
    BackButtonComponent
  ],

  templateUrl: './product-details.component.html',

  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  // =====================================================
  // ROUTE PARAMETERS
  // =====================================================

  categorySlug = '';

  productSlug = '';


  // =====================================================
  // SELECTED DATA
  // =====================================================

  selectedCategory =
    signal<ProductCategory | null>(null);

  selectedProduct =
    signal<CategoryProduct | null>(null);


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}


  // =====================================================
  // INITIAL LOAD
  // =====================================================

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      // -------------------------------------------------
      // Get URL parameters
      // -------------------------------------------------

      this.categorySlug =
        params.get('category') ?? '';

      this.productSlug =
        params.get('product') ?? '';


      console.log(
        'Category:',
        this.categorySlug
      );

      console.log(
        'Product:',
        this.productSlug
      );


      // -------------------------------------------------
      // Get category + product
      // -------------------------------------------------

      const result =
        this.productDataService.getCategoryAndProduct(
          this.categorySlug,
          this.productSlug
        );


        // -------------------------------------------------
        // Update signals
        // -------------------------------------------------

        this.selectedCategory.set(result.category);

        this.selectedProduct.set(result.product);

        // -------------------------------------------------
        // Set first/main image
        // -------------------------------------------------

        if (result.product) {
        this.selectedImage.set(
            result.product.gallery?.[0] ?? result.product.image
        );
        }


      // -------------------------------------------------
      // Debug
      // -------------------------------------------------

      console.log(
        'Selected Category:',
        this.selectedCategory()
      );

      console.log(
        'Selected Product:',
        this.selectedProduct()
      );


      // -------------------------------------------------
      // Category not found
      // -------------------------------------------------

      if (!result.category) {

        console.error(
          'Category not found:',
          this.categorySlug
        );

        return;

      }


      // -------------------------------------------------
      // Product not found
      // -------------------------------------------------

      if (!result.product) {

        console.error(
          'Product not found:',
          this.productSlug
        );

        return;

      }

    });

  }


  // =====================================================
    // PRODUCT IMAGE ZOOM
    // =====================================================

    /**
     * Currently selected main image.
     * By default, use the product's primary image.
     */
    selectedImage = signal<string>('');

    /**
     * Whether the mouse is currently over the main image.
     */
    isImageZoomed = false;

    /**
     * Zoom position.
     *
     * Example:
     * 50% 50% = center of image
     * 20% 70% = left/bottom area
     */
    zoomPosition = '50% 50%';

    // =====================================================
// IMAGE SELECTION
// =====================================================

selectImage(image: string): void {
  this.selectedImage.set(image);

  // Reset zoom when changing image
  this.isImageZoomed = false;
  this.zoomPosition = '50% 50%';
}


// =====================================================
// IMAGE ZOOM - MOUSE ENTER
// =====================================================

onImageMouseEnter(): void {
  // Zoom only when using a mouse.
  this.isImageZoomed = true;
}


// =====================================================
// IMAGE ZOOM - MOUSE LEAVE
// =====================================================

onImageMouseLeave(): void {
  this.isImageZoomed = false;

  // Return zoom position to center
  this.zoomPosition = '50% 50%';
}


// =====================================================
// IMAGE ZOOM - MOUSE MOVE
// =====================================================

onImageMouseMove(event: MouseEvent): void {

  const container = event.currentTarget as HTMLElement;

  const rect = container.getBoundingClientRect();

  // Mouse position inside image container
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convert position to percentage
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  this.zoomPosition = `${xPercent}% ${yPercent}%`;
}



}