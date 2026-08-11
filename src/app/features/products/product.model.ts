export interface Product {
  id: number;
  category_id: number;
  category_name?: string;
  name: string;
  slug: string;
  sku: string;
  short_description?: string;
  description?: string;
  moq: number;
  price_min?: number | null;
  price_max?: number | null;
  primary_material?: string;
  thumbnail?: string;
  featured: boolean;
  sort_order: number;
  status: 'active' | 'inactive';
  created_at?: string;
}

export interface ProductFormValue {
  category_id: number;
  name: string;
  slug?: string;
  sku: string;
  short_description?: string;
  description?: string;
  moq?: number;
  price_min?: number | null;
  price_max?: number | null;
  primary_material?: string;
  featured?: boolean;
  status?: 'active' | 'inactive';
}
