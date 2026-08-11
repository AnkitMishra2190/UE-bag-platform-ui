import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResult } from '../../core/models/api.model';
import { Product, ProductFormValue } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  list(params: {
    search?: string;
    category_id?: number | string;
    status?: string;
    featured?: string;
    page?: number;
    limit?: number;
  }): Observable<ApiResponse<PaginatedResult<Product>>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<PaginatedResult<Product>>>(this.baseUrl, { params: httpParams });
  }

  getById(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${this.baseUrl}/${id}`);
  }

  create(payload: ProductFormValue): Observable<ApiResponse<Product>> {
    return this.http.post<ApiResponse<Product>>(this.baseUrl, payload);
  }

  update(id: number, payload: ProductFormValue): Observable<ApiResponse<Product>> {
    return this.http.put<ApiResponse<Product>>(`${this.baseUrl}/${id}`, payload);
  }

  toggleStatus(id: number): Observable<ApiResponse<Product>> {
    return this.http.patch<ApiResponse<Product>>(`${this.baseUrl}/${id}/toggle-status`, {});
  }

  toggleFeatured(id: number): Observable<ApiResponse<Product>> {
    return this.http.patch<ApiResponse<Product>>(`${this.baseUrl}/${id}/toggle-featured`, {});
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
