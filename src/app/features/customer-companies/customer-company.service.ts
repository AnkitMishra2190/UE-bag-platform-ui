import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResult } from '../../core/models/api.model';
import { CustomerCompany, CustomerCompanyFormValue } from './customer-company.model';

@Injectable({ providedIn: 'root' })
export class CustomerCompanyService {
  private readonly baseUrl = `${environment.apiUrl}/customer-companies`;

  constructor(private http: HttpClient) {}

  list(params: { search?: string; status?: string; page?: number; limit?: number }): Observable<ApiResponse<PaginatedResult<CustomerCompany>>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<PaginatedResult<CustomerCompany>>>(this.baseUrl, { params: httpParams });
  }

  getById(id: number): Observable<ApiResponse<CustomerCompany>> {
    return this.http.get<ApiResponse<CustomerCompany>>(`${this.baseUrl}/${id}`);
  }

  create(payload: CustomerCompanyFormValue): Observable<ApiResponse<CustomerCompany>> {
    return this.http.post<ApiResponse<CustomerCompany>>(this.baseUrl, payload);
  }

  update(id: number, payload: CustomerCompanyFormValue): Observable<ApiResponse<CustomerCompany>> {
    return this.http.put<ApiResponse<CustomerCompany>>(`${this.baseUrl}/${id}`, payload);
  }

  toggleStatus(id: number): Observable<ApiResponse<CustomerCompany>> {
    return this.http.patch<ApiResponse<CustomerCompany>>(`${this.baseUrl}/${id}/toggle-status`, {});
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
