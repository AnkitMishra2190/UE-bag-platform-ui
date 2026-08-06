import { GenericCrudConfig } from './generic-crud.service';

export const COLOR_CONFIG: GenericCrudConfig = {
  title: 'Colors',
  description: 'Manage the color palette available for product variants.',
  apiPath: 'colors',
  createLabel: 'New Color',
  fields: [{ key: 'hex_code', label: 'Hex Code', type: 'color' }],
  columns: [{ key: 'hex_code', label: 'Swatch', mono: true }],
};

export const MATERIAL_CONFIG: GenericCrudConfig = {
  title: 'Materials',
  description: 'Manage the materials used across your product catalog.',
  apiPath: 'materials',
  createLabel: 'New Material',
  fields: [{ key: 'description', label: 'Description', type: 'textarea' }],
  columns: [],
};

export const SIZE_CONFIG: GenericCrudConfig = {
  title: 'Sizes',
  description: 'Manage the size options available for product variants.',
  apiPath: 'sizes',
  createLabel: 'New Size',
  fields: [{ key: 'sort_order', label: 'Sort Order', type: 'number' }],
  columns: [{ key: 'sort_order', label: 'Sort', mono: true }],
};

export const DEPARTMENT_CONFIG: GenericCrudConfig = {
  title: 'Departments',
  description: 'Manage company departments used for organizing staff.',
  apiPath: 'departments',
  createLabel: 'New Department',
  fields: [{ key: 'description', label: 'Description', type: 'textarea' }],
  columns: [],
};

export const TAG_CONFIG: GenericCrudConfig = {
  title: 'Tags',
  description: 'Manage product tags used for filtering and search.',
  apiPath: 'tags',
  createLabel: 'New Tag',
  fields: [{ key: 'slug', label: 'Slug (optional)', type: 'text' }],
  columns: [{ key: 'slug', label: 'Slug', mono: true }],
};

export const PRODUCTION_STAGE_CONFIG: GenericCrudConfig = {
  title: 'Production Stages',
  description: 'Manage the ordered stages of your manufacturing pipeline.',
  apiPath: 'production-stages',
  createLabel: 'New Stage',
  fields: [
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'sort_order', label: 'Sort Order', type: 'number' },
  ],
  columns: [{ key: 'sort_order', label: 'Sort', mono: true }],
};
