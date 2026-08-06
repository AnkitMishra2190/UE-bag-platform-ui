import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, LoginResponse, User } from '../models/api.model';

const TOKEN_KEY = 'unick_auth_token';
const USER_KEY = 'unick_auth_user';

/**
 * Central auth state for the app. Uses Angular signals so any
 * component (sidebar, topbar, route guards) can reactively read
 * "am I logged in" / "what's my role" without manually subscribing.
 *
 * Token + user are persisted to localStorage so a page refresh
 * doesn't log the user out — restored in the constructor.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly currentUser = signal<User | null>(this.restoreUser());
  private readonly token = signal<string | null>(localStorage.getItem(TOKEN_KEY));

  readonly user = this.currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this.token());
  readonly roleSlug = computed(() => this.currentUser()?.role_slug ?? null);

  constructor(private http: HttpClient, private router: Router) {}

  private restoreUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  }

  getToken(): string | null {
    return this.token();
  }

  login(email: string, password: string): Observable<ApiResponse<LoginResponse>> {
    return this.http
      .post<ApiResponse<LoginResponse>>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          if (res.success && res.data) {
            this.setSession(res.data);
          }
        })
      );
  }

  private setSession(data: LoginResponse) {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    this.token.set(data.token);
    this.currentUser.set(data.user);
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.token.set(null);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  /** Checks if the current user's role has a given permission. Populated after /auth/me enrichment (see UserService). */
  hasRole(...roles: string[]): boolean {
    const slug = this.roleSlug();
    return !!slug && roles.includes(slug);
  }
}
