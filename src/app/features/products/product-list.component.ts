import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductFormComponent } from './product-form.component';
import { CategoryService } from '../categories/category.service';
import { Product } from './product.model';
import { Category } from '../categories/category.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductFormComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  total = signal(0);
  loading = signal(false);
  page = signal(1);
  readonly pageSize = 20;

  search = '';
  statusFilter = '';
  categoryFilter = '';

  showForm = false;
  editingProduct: Product | null = null;

  ngOnInit() {
    this.categoryService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.categories.set(res.data.data);
    });
    this.fetch();
  }

  fetch() {
    this.loading.set(true);
    this.productService
      .list({
        search: this.search,
        status: this.statusFilter,
        category_id: this.categoryFilter,
        page: this.page(),
        limit: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.products.set(res.data.data);
            this.total.set(res.data.total);
          }
        },
        error: () => this.loading.set(false),
      });
  }

  onFilterChange() {
    this.page.set(1);
    this.fetch();
  }

  goToPage(p: number) {
    this.page.set(p);
    this.fetch();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total() / this.pageSize));
  }

  priceRange(product: Product): string {
    if (product.price_min == null && product.price_max == null) return '—';
    if (product.price_min != null && product.price_max != null && product.price_min !== product.price_max) {
      return `₹${product.price_min} – ₹${product.price_max}`;
    }
    return `₹${product.price_min ?? product.price_max}`;
  }

  openCreate() {
    this.editingProduct = null;
    this.showForm = true;
  }

  openEdit(product: Product) {
    this.editingProduct = product;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onSaved() {
    this.showForm = false;
    this.fetch();
  }

  toggleStatus(product: Product) {
    this.productService.toggleStatus(product.id).subscribe(() => this.fetch());
  }

  toggleFeatured(product: Product) {
    this.productService.toggleFeatured(product.id).subscribe(() => this.fetch());
  }

  remove(product: Product) {
    if (!confirm(`Move "${product.name}" to trash?`)) return;
    this.productService.delete(product.id).subscribe(() => this.fetch());
  }
}
