import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../core/models/api.model';
import { QuotationItem, QuotationItemFormValue } from './quotation.model';

@Injectable({ providedIn: 'root' })
export class QuotationItemService {
  private readonly baseUrl = `${environment.apiUrl}/quotation-items`;

  constructor(private http: HttpClient) {}

  create(payload: QuotationItemFormValue): Observable<ApiResponse<QuotationItem>> {
    return this.http.post<ApiResponse<QuotationItem>>(this.baseUrl, payload);
  }

  update(id: number, payload: Partial<QuotationItemFormValue>): Observable<ApiResponse<QuotationItem>> {
    return this.http.patch<ApiResponse<QuotationItem>>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
