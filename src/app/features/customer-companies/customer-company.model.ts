export interface CustomerCompany {
  id: number;
  company_name: string;
  industry?: string;
  website?: string;
  gst_number?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  notes?: string;
  status: 'active' | 'inactive';
  created_at?: string;
}

export interface CustomerCompanyFormValue {
  company_name: string;
  industry?: string;
  website?: string;
  gst_number?: string;
  address_line1?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  notes?: string;
  status?: 'active' | 'inactive';
}
