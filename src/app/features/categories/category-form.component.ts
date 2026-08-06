import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent implements OnInit {
  @Input() editing: Category | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);

  saving = false;
  errorMessage: string | null = null;

  form = this.fb.group({
    name: ['', Validators.required],
    slug: [''],
    description: [''],
    sort_order: [0],
    status: ['active' as 'active' | 'inactive'],
  });

  ngOnInit() {
    if (this.editing) {
      this.form.patchValue({
        name: this.editing.name,
        slug: this.editing.slug,
        description: this.editing.description ?? '',
        sort_order: this.editing.sort_order,
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
      ? this.categoryService.update(this.editing.id, payload)
      : this.categoryService.create(payload);

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
