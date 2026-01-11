
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source: string;
}

export interface CSRTier {
  name: string;
  price: string;
  benefits: string[];
}

export interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string;
}
