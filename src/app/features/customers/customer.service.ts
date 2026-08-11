import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResult } from '../../core/models/api.model';
import { Customer, CustomerFormValue } from './customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly baseUrl = `${environment.apiUrl}/customers`;

  constructor(private http: HttpClient) {}

  list(params: {
    search?: string;
    company_id?: number | string;
    assigned_to?: number | string;
    status?: string;
    page?: number;
    limit?: number;
  }): Observable<ApiResponse<PaginatedResult<Customer>>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<PaginatedResult<Customer>>>(this.baseUrl, { params: httpParams });
  }

  getById(id: number): Observable<ApiResponse<Customer>> {
    return this.http.get<ApiResponse<Customer>>(`${this.baseUrl}/${id}`);
  }

  create(payload: CustomerFormValue): Observable<ApiResponse<Customer>> {
    return this.http.post<ApiResponse<Customer>>(this.baseUrl, payload);
  }

  update(id: number, payload: CustomerFormValue): Observable<ApiResponse<Customer>> {
    return this.http.put<ApiResponse<Customer>>(`${this.baseUrl}/${id}`, payload);
  }

  toggleStatus(id: number): Observable<ApiResponse<Customer>> {
    return this.http.patch<ApiResponse<Customer>>(`${this.baseUrl}/${id}/toggle-status`, {});
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
