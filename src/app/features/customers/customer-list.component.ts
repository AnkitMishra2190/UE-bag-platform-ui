import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { CustomerFormComponent } from './customer-form.component';
import { CustomerCompanyService } from '../customer-companies/customer-company.service';
import { Customer } from './customer.model';
import { CustomerCompany } from '../customer-companies/customer-company.model';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomerFormComponent],
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  private customerService = inject(CustomerService);
  private companyService = inject(CustomerCompanyService);

  customers = signal<Customer[]>([]);
  companies = signal<CustomerCompany[]>([]);
  total = signal(0);
  loading = signal(false);
  page = signal(1);
  readonly pageSize = 20;

  search = '';
  statusFilter = '';
  companyFilter = '';

  showForm = false;
  editingCustomer: Customer | null = null;

  ngOnInit() {
    this.companyService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.companies.set(res.data.data);
    });
    this.fetch();
  }

  fetch() {
    this.loading.set(true);
    this.customerService
      .list({
        search: this.search,
        status: this.statusFilter,
        company_id: this.companyFilter,
        page: this.page(),
        limit: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.customers.set(res.data.data);
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

  openCreate() {
    this.editingCustomer = null;
    this.showForm = true;
  }

  openEdit(customer: Customer) {
    this.editingCustomer = customer;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onSaved() {
    this.showForm = false;
    this.fetch();
  }

  toggleStatus(customer: Customer) {
    this.customerService.toggleStatus(customer.id).subscribe(() => this.fetch());
  }

  remove(customer: Customer) {
    if (!confirm(`Move "${customer.name}" to trash?`)) return;
    this.customerService.delete(customer.id).subscribe(() => this.fetch());
  }
}
