import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InquiryService } from './inquiry.service';
import { InquiryFormComponent } from './inquiry-form.component';
import { UserLookupService } from '../../core/services/user-lookup.service';
import { Inquiry, InquiryPriority, InquiryStatus } from './inquiry.model';
import { User } from '../../core/models/api.model';

@Component({
  selector: 'app-inquiry-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InquiryFormComponent],
  templateUrl: './inquiry-list.component.html',
})
export class InquiryListComponent implements OnInit {
  private inquiryService = inject(InquiryService);
  private userLookup = inject(UserLookupService);

  inquiries = signal<Inquiry[]>([]);
  salesReps = signal<User[]>([]);
  total = signal(0);
  loading = signal(false);
  page = signal(1);
  readonly pageSize = 20;

  readonly statuses: InquiryStatus[] = ['new', 'in_progress', 'quoted', 'closed', 'lost'];
  readonly priorities: InquiryPriority[] = ['low', 'medium', 'high', 'urgent'];

  search = '';
  statusFilter = '';
  priorityFilter = '';

  showForm = false;

  ngOnInit() {
    this.userLookup.list({ status: 'active', limit: 200 }).subscribe((res) => {
      if (res.success && res.data) this.salesReps.set(res.data.data);
    });
    this.fetch();
  }

  fetch() {
    this.loading.set(true);
    this.inquiryService
      .list({
        search: this.search,
        status: this.statusFilter,
        priority: this.priorityFilter,
        page: this.page(),
        limit: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.inquiries.set(res.data.data);
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

  formatStatus(status: string): string {
    return status.replace('_', ' ');
  }

  openCreate() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  onSaved() {
    this.showForm = false;
    this.fetch();
  }

  changeStatus(inquiry: Inquiry, status: InquiryStatus) {
    if (status === inquiry.status) return;
    this.inquiryService.updateStatus(inquiry.id, status).subscribe(() => this.fetch());
  }

  changePriority(inquiry: Inquiry, priority: InquiryPriority) {
    if (priority === inquiry.priority) return;
    this.inquiryService.updatePriority(inquiry.id, priority).subscribe(() => this.fetch());
  }

  changeAssignee(inquiry: Inquiry, userId: string) {
    if (!userId) return;
    this.inquiryService.assign(inquiry.id, Number(userId)).subscribe(() => this.fetch());
  }

  remove(inquiry: Inquiry) {
    if (!confirm(`Move inquiry "${inquiry.subject}" to trash?`)) return;
    this.inquiryService.delete(inquiry.id).subscribe(() => this.fetch());
  }
}
