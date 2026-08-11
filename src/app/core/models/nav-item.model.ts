export interface NavChild {
  label: string;
  path: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavChild[];
}
