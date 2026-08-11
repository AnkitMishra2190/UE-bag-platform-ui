export type InquiryStatus = 'new' | 'in_progress' | 'quoted' | 'closed' | 'lost';
export type InquiryPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Inquiry {
  id: number;
  customer_id: number;
  customer_name?: string;
  customer_email?: string;
  product_id?: number | null;
  product_name?: string;
  assigned_to?: number | null;
  assigned_to_name?: string;
  subject: string;
  message: string;
  quantity_required?: number | null;
  status: InquiryStatus;
  priority: InquiryPriority;
  source?: string;
  created_at?: string;
}

export interface InquiryFormValue {
  customer_id: number;
  product_id?: number | null;
  subject: string;
  message: string;
  quantity_required?: number | null;
  priority?: InquiryPriority;
  source?: string;
}
