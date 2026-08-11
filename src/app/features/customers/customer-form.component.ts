import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CustomerService } from './customer.service';
import { CustomerCompanyService } from '../customer-companies/customer-company.service';
import { UserLookupService } from '../../core/services/user-lookup.service';
import { Customer } from './customer.model';
import { CustomerCompany } from '../customer-companies/customer-company.model';
import { User } from '../../core/models/api.model';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent implements OnInit {
  @Input() editing: Customer | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private customerService = inject(CustomerService);
  private companyService = inject(CustomerCompanyService);
  private userLookup = inject(UserLookupService);

  companies = signal<CustomerCompany[]>([]);
  salesReps = signal<User[]>([]);
  saving = false;
  errorMessage: string | null = null;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    designation: [''],
    company_id: [null as number | null],
    assigned_to: [null as number | null],
    source: [''],
    status: ['active' as 'active' | 'inactive'],
  });

  ngOnInit() {
    this.companyService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.companies.set(res.data.data);
    });
    // Sales reps: everyone is fetchable here since role-based filtering
    // (e.g. only Sales Managers) isn't exposed by the API yet — the
    // dropdown just needs a name to assign to, any active user qualifies.
    this.userLookup.list({ status: 'active', limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.salesReps.set(res.data.data);
    });

    if (this.editing) {
      this.form.patchValue({
        name: this.editing.name,
        email: this.editing.email,
        phone: this.editing.phone ?? '',
        designation: this.editing.designation ?? '',
        company_id: this.editing.company_id ?? null,
        assigned_to: this.editing.assigned_to ?? null,
        source: this.editing.source ?? '',
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
      ? this.customerService.update(this.editing.id, payload)
      : this.customerService.create(payload);

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
