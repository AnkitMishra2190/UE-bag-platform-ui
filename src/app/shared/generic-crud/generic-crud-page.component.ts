import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ModalComponent } from '../components/modal/modal.component';
import { createGenericCrudService, GenericCrudConfig } from './generic-crud.service';

@Component({
  selector: 'app-generic-crud-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './generic-crud-page.component.html',
})
export class GenericCrudPageComponent implements OnInit {
  @Input({ required: true }) config!: GenericCrudConfig;

  private http = inject(HttpClient);
  private service!: ReturnType<typeof createGenericCrudService<any>>;

  items = signal<any[]>([]);
  total = signal(0);
  loading = signal(false);
  page = signal(1);
  readonly pageSize = 20;

  search = '';
  statusFilter = '';

  showForm = false;
  editingItem: any = null;
  formValue: Record<string, any> = {};
  saving = false;
  errorMessage: string | null = null;

  ngOnInit() {
    this.service = createGenericCrudService(this.http, `${environment.apiUrl}/${this.config.apiPath}`);
    this.fetch();
  }

  fetch() {
    this.loading.set(true);
    this.service.list({ search: this.search, status: this.statusFilter, page: this.page(), limit: this.pageSize }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.items.set(res.data.data);
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

  goToPage(p: number) {
    this.page.set(p);
    this.fetch();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total() / this.pageSize));
  }

  openCreate() {
    this.editingItem = null;
    this.formValue = { name: '', status: 'active' };
    this.config.fields.forEach((f) => (this.formValue[f.key] = ''));
    this.errorMessage = null;
    this.showForm = true;
  }

  openEdit(item: any) {
    this.editingItem = item;
    this.formValue = { name: item.name, status: item.status };
    this.config.fields.forEach((f) => (this.formValue[f.key] = item[f.key] ?? ''));
    this.errorMessage = null;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  submit() {
    if (!this.formValue['name']?.trim()) {
      this.errorMessage = 'Name is required.';
      return;
    }

    this.saving = true;
    this.errorMessage = null;

    const request = this.editingItem
      ? this.service.update(this.editingItem.id, this.formValue)
      : this.service.create(this.formValue);

    request.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.success) {
          this.showForm = false;
          this.fetch();
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

  toggleStatus(item: any) {
    this.service.toggleStatus(item.id).subscribe(() => this.fetch());
  }

  remove(item: any) {
    if (!confirm(`Move "${item.name}" to trash?`)) return;
    this.service.delete(item.id).subscribe(() => this.fetch());
  }
}
