import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { QuotationService } from './quotation.service';
import { CustomerService } from '../customers/customer.service';
import { Customer } from '../customers/customer.model';
import { Quotation } from './quotation.model';

@Component({
  selector: 'app-quotation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './quotation-form.component.html',
})
export class QuotationFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<Quotation>();

  private fb = inject(FormBuilder);
  private quotationService = inject(QuotationService);
  private customerService = inject(CustomerService);

  customers = signal<Customer[]>([]);
  saving = false;
  errorMessage: string | null = null;

  form = this.fb.group({
    customer_id: [null as number | null, Validators.required],
    valid_until: [''],
    discount_amount: [0],
    tax_amount: [0],
    notes: [''],
  });

  constructor() {
    this.customerService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.customers.set(res.data.data);
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    this.errorMessage = null;
    const payload = this.form.getRawValue() as any;

    this.quotationService.create(payload).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.success && res.data) {
          this.created.emit(res.data);
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
