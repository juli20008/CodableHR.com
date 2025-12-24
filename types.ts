
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}
