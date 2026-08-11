import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CustomerCompanyService } from './customer-company.service';
import { CustomerCompany } from './customer-company.model';

@Component({
  selector: 'app-customer-company-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './customer-company-form.component.html',
})
export class CustomerCompanyFormComponent implements OnInit {
  @Input() editing: CustomerCompany | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private companyService = inject(CustomerCompanyService);

  saving = false;
  errorMessage: string | null = null;

  form = this.fb.group({
    company_name: ['', Validators.required],
    industry: [''],
    website: [''],
    gst_number: [''],
    address_line1: [''],
    city: [''],
    state: [''],
    country: [''],
    postal_code: [''],
    status: ['active' as 'active' | 'inactive'],
  });

  ngOnInit() {
    if (this.editing) {
      this.form.patchValue({
        company_name: this.editing.company_name,
        industry: this.editing.industry ?? '',
        website: this.editing.website ?? '',
        gst_number: this.editing.gst_number ?? '',
        address_line1: this.editing.address_line1 ?? '',
        city: this.editing.city ?? '',
        state: this.editing.state ?? '',
        country: this.editing.country ?? '',
        postal_code: this.editing.postal_code ?? '',
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
      ? this.companyService.update(this.editing.id, payload)
      : this.companyService.create(payload);

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
