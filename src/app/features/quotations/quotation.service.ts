import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResult } from '../../core/models/api.model';
import { Quotation, QuotationFormValue, QuotationStatus } from './quotation.model';

@Injectable({ providedIn: 'root' })
export class QuotationService {
  private readonly baseUrl = `${environment.apiUrl}/quotations`;

  constructor(private http: HttpClient) {}

  list(params: {
    search?: string;
    status?: string;
    customer_id?: number | string;
    page?: number;
    limit?: number;
  }): Observable<ApiResponse<PaginatedResult<Quotation>>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<PaginatedResult<Quotation>>>(this.baseUrl, { params: httpParams });
  }

  // Full detail — includes .items, used by the detail page.
  getById(id: number): Observable<ApiResponse<Quotation>> {
    return this.http.get<ApiResponse<Quotation>>(`${this.baseUrl}/${id}`);
  }

  create(payload: QuotationFormValue): Observable<ApiResponse<Quotation>> {
    return this.http.post<ApiResponse<Quotation>>(this.baseUrl, payload);
  }

  update(id: number, payload: Partial<QuotationFormValue>): Observable<ApiResponse<Quotation>> {
    return this.http.put<ApiResponse<Quotation>>(`${this.baseUrl}/${id}`, payload);
  }

  updateStatus(id: number, status: QuotationStatus): Observable<ApiResponse<Quotation>> {
    return this.http.patch<ApiResponse<Quotation>>(`${this.baseUrl}/${id}/status`, { status });
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
