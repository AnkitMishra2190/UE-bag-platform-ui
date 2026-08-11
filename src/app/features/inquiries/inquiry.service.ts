import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResult } from '../../core/models/api.model';
import { Inquiry, InquiryFormValue, InquiryPriority, InquiryStatus } from './inquiry.model';

@Injectable({ providedIn: 'root' })
export class InquiryService {
  private readonly baseUrl = `${environment.apiUrl}/inquiries`;

  constructor(private http: HttpClient) {}

  list(params: {
    search?: string;
    status?: string;
    priority?: string;
    assigned_to?: number | string;
    customer_id?: number | string;
    page?: number;
    limit?: number;
  }): Observable<ApiResponse<PaginatedResult<Inquiry>>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<PaginatedResult<Inquiry>>>(this.baseUrl, { params: httpParams });
  }

  getById(id: number): Observable<ApiResponse<Inquiry>> {
    return this.http.get<ApiResponse<Inquiry>>(`${this.baseUrl}/${id}`);
  }

  create(payload: InquiryFormValue): Observable<ApiResponse<Inquiry>> {
    return this.http.post<ApiResponse<Inquiry>>(this.baseUrl, payload);
  }

  update(id: number, payload: Partial<InquiryFormValue>): Observable<ApiResponse<Inquiry>> {
    return this.http.put<ApiResponse<Inquiry>>(`${this.baseUrl}/${id}`, payload);
  }

  // Dedicated endpoints (not the generic update) — the backend
  // auto-logs an activity-timeline note on each of these, which a
  // generic PUT does not trigger.
  updateStatus(id: number, status: InquiryStatus): Observable<ApiResponse<Inquiry>> {
    return this.http.patch<ApiResponse<Inquiry>>(`${this.baseUrl}/${id}/status`, { status });
  }

  updatePriority(id: number, priority: InquiryPriority): Observable<ApiResponse<Inquiry>> {
    return this.http.patch<ApiResponse<Inquiry>>(`${this.baseUrl}/${id}/priority`, { priority });
  }

  assign(id: number, assigned_to: number): Observable<ApiResponse<Inquiry>> {
    return this.http.patch<ApiResponse<Inquiry>>(`${this.baseUrl}/${id}/assign`, { assigned_to });
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
