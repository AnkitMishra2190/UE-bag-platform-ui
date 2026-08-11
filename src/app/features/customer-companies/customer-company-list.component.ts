import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerCompanyService } from './customer-company.service';
import { CustomerCompanyFormComponent } from './customer-company-form.component';
import { CustomerCompany } from './customer-company.model';

@Component({
  selector: 'app-customer-company-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomerCompanyFormComponent],
  templateUrl: './customer-company-list.component.html',
})
export class CustomerCompanyListComponent implements OnInit {
  private companyService = inject(CustomerCompanyService);

  companies = signal<CustomerCompany[]>([]);
  total = signal(0);
  loading = signal(false);
  page = signal(1);
  readonly pageSize = 20;

  search = '';
  statusFilter = '';

  showForm = false;
  editingCompany: CustomerCompany | null = null;

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.loading.set(true);
    this.companyService
      .list({ search: this.search, status: this.statusFilter, page: this.page(), limit: this.pageSize })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.companies.set(res.data.data);
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
    this.editingCompany = null;
    this.showForm = true;
  }

  openEdit(company: CustomerCompany) {
    this.editingCompany = company;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onSaved() {
    this.showForm = false;
    this.fetch();
  }

  toggleStatus(company: CustomerCompany) {
    this.companyService.toggleStatus(company.id).subscribe(() => this.fetch());
  }

  remove(company: CustomerCompany) {
    if (!confirm(`Move "${company.company_name}" to trash?`)) return;
    this.companyService.delete(company.id).subscribe(() => this.fetch());
  }
}
