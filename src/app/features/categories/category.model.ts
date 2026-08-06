export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parent_id?: number | null;
  icon?: string;
  image?: string;
  sort_order: number;
  meta_title?: string;
  meta_description?: string;
  status: 'active' | 'inactive';
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export interface CategoryFormValue {
  name: string;
  slug?: string;
  description?: string;
  parent_id?: number | null;
  sort_order?: number;
  status?: 'active' | 'inactive';
}
