export type QuotationStatus = 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';

export interface QuotationItem {
  id: number;
  quotation_id: number;
  product_id?: number | null;
  variant_id?: number | null;
  description: string;
  quantity: number;
  unit_price: number;
  line_total: number;
  sort_order: number;
  current_product_name?: string;
}

export interface Quotation {
  id: number;
  inquiry_id?: number | null;
  customer_id: number;
  customer_name?: string;
  customer_email?: string;
  quotation_number: string;
  valid_until?: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  currency: string;
  status: QuotationStatus;
  notes?: string;
  created_at?: string;
  items?: QuotationItem[];
}

export interface QuotationFormValue {
  customer_id: number;
  inquiry_id?: number | null;
  valid_until?: string | null;
  discount_amount?: number;
  tax_amount?: number;
  notes?: string;
}

export interface QuotationItemFormValue {
  quotation_id: number;
  product_id?: number | null;
  description: string;
  quantity: number;
  unit_price: number;
}
