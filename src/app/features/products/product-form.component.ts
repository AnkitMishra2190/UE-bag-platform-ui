import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ProductService } from './product.service';
import { CategoryService } from '../categories/category.service';
import { Product } from './product.model';
import { Category } from '../categories/category.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  @Input() editing: Product | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);
  saving = false;
  errorMessage: string | null = null;

  form = this.fb.group({
    category_id: [null as number | null, Validators.required],
    name: ['', Validators.required],
    slug: [''],
    sku: ['', Validators.required],
    short_description: [''],
    moq: [1, [Validators.required, Validators.min(1)]],
    price_min: [null as number | null],
    price_max: [null as number | null],
    primary_material: [''],
    featured: [false],
    status: ['active' as 'active' | 'inactive'],
  });

  ngOnInit() {
    // All categories, not paginated 20 at a time — a dropdown needs the full list.
    this.categoryService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.categories.set(res.data.data);
    });

    if (this.editing) {
      this.form.patchValue({
        category_id: this.editing.category_id,
        name: this.editing.name,
        slug: this.editing.slug,
        sku: this.editing.sku,
        short_description: this.editing.short_description ?? '',
        moq: this.editing.moq,
        price_min: this.editing.price_min ?? null,
        price_max: this.editing.price_max ?? null,
        primary_material: this.editing.primary_material ?? '',
        featured: this.editing.featured,
        status: this.editing.status,
      });
    }
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    this.errorMessage = null;
    const payload = this.form.getRawValue() as any;

    const request = this.editing
      ? this.productService.update(this.editing.id, payload)
      : this.productService.create(payload);

    request.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.success) {
          this.saved.emit();
        } else {
          this.errorMessage = res.error ?? 'Something went wrong.';
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMessage = err?.error?.error ?? 'Something went wrong.';
      },
    });
  }
}
