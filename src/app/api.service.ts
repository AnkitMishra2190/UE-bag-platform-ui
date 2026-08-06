import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5000/api';

  getTest(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/test`);
  }
}