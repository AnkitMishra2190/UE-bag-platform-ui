import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, PaginatedResult } from '../../core/models/api.model';

/**
 * Generic REST service for simple lookup entities (Colors, Materials,
 * Sizes, Departments, Tags, Production Stages) that all share the
 * same shape and endpoint conventions as the backend's
 * attribute-crud.factory.js — name/status/soft-delete, standard
 * list/create/update/toggle-status/delete routes.
 *
 * NOT used for Products, Customers, Orders, etc. — those have
 * module-specific relationships (nesting, joins, multi-step forms)
 * that don't fit a generic template, same reasoning as the backend
 * keeping those as dedicated models rather than factory instances.
 */
export function createGenericCrudService<T extends { id: number; status: string }>(
  http: HttpClient,
  baseUrl: string
) {
  return {
    list(params: { search?: string; status?: string; page?: number; limit?: number }): Observable<ApiResponse<PaginatedResult<T>>> {
      let httpParams = new HttpParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          httpParams = httpParams.set(key, String(value));
        }
      });
      return http.get<ApiResponse<PaginatedResult<T>>>(baseUrl, { params: httpParams });
    },
    create(payload: Partial<T>): Observable<ApiResponse<T>> {
      return http.post<ApiResponse<T>>(baseUrl, payload);
    },
    update(id: number, payload: Partial<T>): Observable<ApiResponse<T>> {
      return http.put<ApiResponse<T>>(`${baseUrl}/${id}`, payload);
    },
    toggleStatus(id: number): Observable<ApiResponse<T>> {
      return http.patch<ApiResponse<T>>(`${baseUrl}/${id}/toggle-status`, {});
    },
    delete(id: number): Observable<ApiResponse<null>> {
      return http.delete<ApiResponse<null>>(`${baseUrl}/${id}`);
    },
  };
}

export interface GenericFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'number' | 'textarea' | 'color';
  required?: boolean;
}

export interface GenericCrudConfig {
  title: string;
  description: string;
  apiPath: string; // e.g. 'colors'
  createLabel: string;
  fields: GenericFieldConfig[]; // fields beyond 'name' + 'status', which are always present
  columns: { key: string; label: string; mono?: boolean }[]; // extra columns shown in the table beyond Name/Status
}
