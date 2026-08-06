import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Attaches "Authorization: Bearer <token>" to every outgoing request
 * (when a token exists), and logs the user out automatically on a
 * 401 — matching the backend's authenticate middleware, which returns
 * 401 for a missing/invalid/expired token. Without this, an expired
 * session would just silently fail requests instead of returning the
 * user to the login screen.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        auth.logout();
      }
      return throwError(() => error);
    })
  );
};
