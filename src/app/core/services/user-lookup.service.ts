import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResult, User } from '../models/api.model';

/**
 * Minimal read-only user lookups, used to populate "assigned to"
 * dropdowns (Customers, Inquiries) before a full User management
 * screen exists. Deliberately not a full UserService — creation/
 * editing of users stays exclusive to the dedicated Users module,
 * matching the backend's own separation (register vs. user CRUD).
 */
@Injectable({ providedIn: 'root' })
export class UserLookupService {
  private readonly baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  list(params: { search?: string; status?: string; limit?: number } = {}): Observable<ApiResponse<PaginatedResult<User>>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<PaginatedResult<User>>>(this.baseUrl, { params: httpParams });
  }
}
