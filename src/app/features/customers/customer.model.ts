export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  alternate_phone?: string;
  designation?: string;
  company_id?: number | null;
  company_name?: string;
  assigned_to?: number | null;
  assigned_to_name?: string;
  source?: string;
  status: 'active' | 'inactive';
  created_at?: string;
}

export interface CustomerFormValue {
  name: string;
  email: string;
  phone?: string;
  alternate_phone?: string;
  designation?: string;
  company_id?: number | null;
  assigned_to?: number | null;
  source?: string;
  status?: 'active' | 'inactive';
}
