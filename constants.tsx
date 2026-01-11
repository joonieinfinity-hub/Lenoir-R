
import { MenuItem, Testimonial, CSRTier, EventItem } from './types';

export const COLORS = {
  primary: '#5D2E28', // Wine/Earth tone
  secondary: '#8B4513', // Warm wood
  accent: '#E6A36E', // Sunset orange
  background: '#FDFBF7', // Cream
  text: '#332C2B',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Fried Blue Corn & Pecan Hushpuppies",
    description: "sweet potato mole, crème fraîche",
    price: "$14",
    category: "Starter",
    image: "https://picsum.photos/seed/hushpuppies/600/400"
  },
  {
    name: "Crab Fingers",
    description: "curry leaf, leche de tigre, smoked chili oil",
    price: "$22",
    category: "Starter",
    image: "https://picsum.photos/seed/crab/600/400"
  },
  {
    name: "Big Tree Oysters",
    description: "chili mignonette, pickled shallots",
    price: "$18",
    category: "Starter",
    image: "https://picsum.photos/seed/oysters/600/400"
  },
  {
    name: "Bulgogi Beef Tartare",
    description: "apple kimchi, potato chips",
    price: "$19",
    category: "Starter",
    image: "https://picsum.photos/seed/tartare/600/400"
  },
  {
    name: "Seared Whole Fish",
    description: "blue crab salad & Goan crab curry",
    price: "$48",
    category: "Main",
    image: "https://picsum.photos/seed/fish/600/400"
  },
  {
    name: "Roasted Half Chicken",
    description: "chili lime butter & gremolata",
    price: "$34",
    category: "Main",
    image: "https://picsum.photos/seed/chicken/600/400"
  },
  {
    name: "10oz Seared Picanha Steak",
    description: "mojo de ajo & roasted potatoes",
    price: "$42",
    category: "Main",
    image: "https://picsum.photos/seed/steak/600/400"
  },
  {
    name: "Tangerine Almond Cake",
    description: "seasonal citrus, whipped cream",
    price: "$12",
    category: "Dessert",
    image: "https://picsum.photos/seed/cake/600/400"
  },
  {
    name: "Fried Apple Hand Pie",
    description: "cinnamon sugar, vanilla bean ice cream",
    price: "$11",
    category: "Dessert",
    image: "https://picsum.photos/seed/pie/600/400"
  },
  {
    name: "Caramelized Banana Pudding",
    description: "wafer crunch, dark chocolate",
    price: "$10",
    category: "Dessert",
    image: "https://picsum.photos/seed/pudding/600/400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A true gem in Austin. The wine list is impeccable, and the seasonal flavors are unlike anything else in the city.",
    author: "Elena S.",
    source: "Google Reviews"
  },
  {
    quote: "The wine garden at sunset is magic. Every dish tells a story of the Texas landscape.",
    author: "Marcus T.",
    source: "Yelp"
  },
  {
    quote: "The Picanha steak was perfectly cooked, and the service was warm and attentive without being stuffy.",
    author: "Sarah J.",
    source: "Resy User"
  }
];

export const CSR_TIERS: CSRTier[] = [
  {
    name: "Traditional",
    price: "$1,000",
    benefits: ["$1,200 house credit", "Priority booking", "Seasonal updates"]
  },
  {
    name: "Second Tier",
    price: "$2,500",
    benefits: ["$3,000 house credit", "Expert knife sharpenings", "Exclusive wine garden events", "Member-only perks"]
  },
  {
    name: "Third Tier",
    price: "$5,000",
    benefits: ["Private 5-course dinner for 8", "Customized house credit & perks", "Direct contact for special requests", "Chef-led pantry experiences"]
  }
];

export const EVENTS: EventItem[] = [
  {
    title: "Robert Sinskey Wine Dinner",
    date: "March 15, 2024",
    description: "An evening of Napa Valley elegance paired with seasonal Texas small plates.",
    image: "https://picsum.photos/seed/wine_event/600/400"
  },
  {
    title: "Beefsteak Dinner",
    date: "April 2nd, 2024",
    description: "A carnivorous celebration of local picanha and big reds in the garden.",
    image: "https://picsum.photos/seed/beefsteak/600/400"
  },
  {
    title: "Cool Down with Good Work Austin",
    date: "Monthly",
    description: "Charity drinks and snacks supporting our local community workers.",
    image: "https://picsum.photos/seed/community/600/400"
  }
];
