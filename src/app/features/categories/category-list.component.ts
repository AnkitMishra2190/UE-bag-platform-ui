import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { CategoryFormComponent } from './category-form.component';
import { Category } from './category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryFormComponent],
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);
  total = signal(0);
  loading = signal(false);
  page = signal(1);
  readonly pageSize = 20;

  search = '';
  statusFilter = '';

  showForm = false;
  editingCategory: Category | null = null;

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.loading.set(true);
    this.categoryService
      .list({ search: this.search, status: this.statusFilter, page: this.page(), limit: this.pageSize })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.categories.set(res.data.data);
            this.total.set(res.data.total);
          }
        },
        error: () => this.loading.set(false),
      });
  }

  onSearchChange() {
    this.page.set(1);
    this.fetch();
  }

  goToPage(newPage: number) {
    this.page.set(newPage);
    this.fetch();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total() / this.pageSize));
  }

  openCreate() {
    this.editingCategory = null;
    this.showForm = true;
  }

  openEdit(category: Category) {
    this.editingCategory = category;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onSaved() {
    this.showForm = false;
    this.fetch();
  }

  toggleStatus(category: Category) {
    this.categoryService.toggleStatus(category.id).subscribe(() => this.fetch());
  }

  remove(category: Category) {
    if (!confirm(`Move "${category.name}" to trash?`)) return;
    this.categoryService.delete(category.id).subscribe(() => this.fetch());
  }
}
