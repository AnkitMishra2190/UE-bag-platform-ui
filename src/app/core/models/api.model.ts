// Matches the backend's consistent response envelope:
// { success, data/error, message }
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role_id: number;
  role_name?: string;
  role_slug?: string;
  department_id?: number;
  department_name?: string;
  status: 'active' | 'inactive' | 'suspended';
  last_login_at?: string;
  created_at?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
