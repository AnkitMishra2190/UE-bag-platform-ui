import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InquiryService } from './inquiry.service';
import { CustomerService } from '../customers/customer.service';
import { ProductService } from '../products/product.service';
import { Inquiry } from './inquiry.model';
import { Customer } from '../customers/customer.model';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './inquiry-form.component.html',
})
export class InquiryFormComponent implements OnInit {
  // Only used for CREATE — editing an inquiry's core fields (subject,
  // message) happens rarely; status/priority/assignment changes go
  // through their own dedicated actions in the list, not this form.
  @Input() presetCustomerId: number | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private inquiryService = inject(InquiryService);
  private customerService = inject(CustomerService);
  private productService = inject(ProductService);

  customers = signal<Customer[]>([]);
  products = signal<Product[]>([]);
  saving = false;
  errorMessage: string | null = null;

  form = this.fb.group({
    customer_id: [null as number | null, Validators.required],
    product_id: [null as number | null],
    subject: ['', Validators.required],
    message: ['', Validators.required],
    quantity_required: [null as number | null],
    priority: ['medium' as 'low' | 'medium' | 'high' | 'urgent'],
    source: [''],
  });

  ngOnInit() {
    this.customerService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.customers.set(res.data.data);
    });
    this.productService.list({ limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.products.set(res.data.data);
    });

    if (this.presetCustomerId) {
      this.form.patchValue({ customer_id: this.presetCustomerId });
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

    this.inquiryService.create(payload).subscribe({
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
