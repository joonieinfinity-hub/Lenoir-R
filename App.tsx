
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Wine, 
  Star, 
  Instagram, 
  Facebook,
  Menu as MenuIcon,
  X,
  Users,
  Award,
  Heart
} from 'lucide-react';
import { MENU_ITEMS, TESTIMONIALS, CSR_TIERS, EVENTS, COLORS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Wine Club', href: '#wine-club' },
    { name: 'Events', href: '#events' },
    { name: 'Visit', href: '#visit' },
    { name: 'CSR', href: '#csr' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`serif text-3xl font-bold tracking-widest transition-colors ${scrolled ? 'text-[#5D2E28]' : 'text-white'}`}>
          LENOIR
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-[#E6A36E] ${scrolled ? 'text-[#332C2B]' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="px-6 py-2 bg-[#5D2E28] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#3d1e1a] transition-colors"
          >
            Reserve
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-[#332C2B]' : 'text-white'} /> : <MenuIcon className={scrolled ? 'text-[#332C2B]' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#332C2B] border-b border-gray-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="w-full text-center py-3 bg-[#5D2E28] text-white font-bold uppercase tracking-widest rounded-sm"
          >
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <header className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/lenoir_garden/1920/1080" 
        alt="Lenoir Wine Garden" 
        className="w-full h-full object-cover brightness-50"
      />
    </div>
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full">
          <Award size={14} className="text-[#E6A36E]" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest">Featured in MICHELIN Guide</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-8xl mb-6 font-medium leading-tight">
        Exceptional Seasonal <br/> <span className="italic">Dining in Austin</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto leading-relaxed text-gray-200">
        A farm-to-table culinary destination celebrating local Texas ingredients, bold flavor, and warm hospitality in a relaxed wine garden setting.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="#reservations" className="w-full sm:w-auto px-10 py-4 bg-[#5D2E28] text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#3d1e1a] transition-all transform hover:-translate-y-1">
          Reserve a Table
        </a>
        <a href="#menu" className="w-full sm:w-auto px-10 py-4 border border-white/50 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-[#332C2B] transition-all transform hover:-translate-y-1 backdrop-blur-sm">
          View Menu
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-px h-12 bg-white/30 mx-auto"></div>
    </div>
  </header>
);

const About = () => {
  const images = [
    "https://picsum.photos/seed/dish1/800/600",
    "https://picsum.photos/seed/dish2/800/600",
    "https://picsum.photos/seed/garden_view/800/600",
    "https://picsum.photos/seed/interior/800/600"
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="about" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="overflow-hidden rounded-sm shadow-2xl aspect-[4/3]">
            <img 
              src={images[currentIdx]} 
              alt="Lenoir Experience" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white"><ChevronLeft size={20}/></button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white"><ChevronRight size={20}/></button>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#5D2E28]/5 -z-10 rounded-full"></div>
        </div>
        <div>
          <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Established 2012</h4>
          <h2 className="text-4xl md:text-5xl mb-8 leading-snug">Named after a hearty grape growing across <span className="italic">Texas Hill Country</span></h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Since opening in 2012, chef-owners Todd Duplechan and Jessica Maher have crafted a seasonal, warm-weather cuisine inspired by local ingredients and global techniques.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            At Lenoir, food is thoughtfully prepared with spice, heat, and robust flavor and served alongside an extraordinary selection of wines from grower-producers worldwide. It's more than a meal; it's a tribute to the land's bounty.
          </p>
          
          <div className="flex space-x-8 items-center pt-8 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <img src="https://picsum.photos/seed/todd/80/80" className="w-12 h-12 rounded-full object-cover grayscale" alt="Todd Duplechan"/>
              <div>
                <p className="font-bold text-sm">Todd Duplechan</p>
                <p className="text-xs text-gray-500 italic">Chef-Owner</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="https://picsum.photos/seed/jessica/80/80" className="w-12 h-12 rounded-full object-cover grayscale" alt="Jessica Maher"/>
              <div>
                <p className="font-bold text-sm">Jessica Maher</p>
                <p className="text-xs text-gray-500 italic">Chef-Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const filtered = MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Offerings</h4>
          <h2 className="text-4xl md:text-5xl mb-6">Innovative Seasonal Fare</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Innovative seasonal à la carte offerings focusing on locally sourced ingredients and warm-weather flavors.</p>
        </div>

        <div className="flex justify-center space-x-8 md:space-x-12 mb-16 border-b border-gray-100">
          {(['Starter', 'Main', 'Dessert'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-[#5D2E28]' : 'text-gray-400'}`}
            >
              {tab}s
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-px bg-[#5D2E28]"></div>}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 aspect-[4/5] bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <span className="text-[#5D2E28] font-bold text-sm">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-[#332C2B] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all inline-flex items-center space-x-2">
            <span>Download Full Menu PDF</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const WineClub = () => (
  <section id="wine-club" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://picsum.photos/seed/wine_bg/1920/1080" className="w-full h-full object-cover brightness-[0.4]" alt="Wine selection"/>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
      <Wine className="mx-auto mb-8 text-[#E6A36E]" size={48} />
      <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Curated Experiences</h4>
      <h2 className="text-4xl md:text-5xl mb-8">The Lenoir Wine Club</h2>
      <p className="text-lg md:text-xl font-light leading-relaxed mb-12 text-gray-200">
        Bring the Lenoir experience home with our Wine Club — a monthly curated selection featuring seasonal sips, rare finds, and bottles with compelling stories from independent winemakers.
      </p>
      <button className="px-12 py-5 bg-[#E6A36E] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#d58e57] transition-all transform hover:-translate-y-1">
        Join the Wine Club
      </button>
    </div>
  </section>
);

const Events = () => (
  <section id="events" className="py-24 bg-[#FDFBF7]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Special Nights</h4>
          <h2 className="text-4xl md:text-5xl">Events & Experiences</h2>
        </div>
        <button className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D2E28] border-b border-[#5D2E28] pb-1 hover:text-[#E6A36E] hover:border-[#E6A36E] transition-all">
          View All Events
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {EVENTS.map((event, idx) => (
          <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover"/>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E6A36E] mb-2">{event.date}</p>
              <h3 className="text-2xl mb-4 serif font-bold">{event.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{event.description}</p>
              <button className="mt-8 text-xs font-bold uppercase tracking-widest text-[#5D2E28] inline-flex items-center group">
                Learn More <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PrivateDining = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Gatherings</h4>
          <h2 className="text-4xl md:text-5xl mb-8">Host Your Event With Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Lenoir’s restaurant and wine garden are available for private gatherings, business dinners, and wedding receptions. With a capacity of 16–65 guests, tailored menus, and beautiful ambiance, it’s the perfect place to host unforgettable moments.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="font-bold text-sm uppercase tracking-widest mb-2">Capacity</p>
              <p className="text-gray-500">16 – 65 Guests</p>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-widest mb-2">Setting</p>
              <p className="text-gray-500">Indoor/Outdoor Garden</p>
            </div>
          </div>
          <button className="px-10 py-5 bg-[#5D2E28] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#3d1e1a] transition-all">
            Inquire About Private Dining
          </button>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/private1/400/600" alt="Dining Room" className="w-full h-80 object-cover rounded-sm"/>
          <img src="https://picsum.photos/seed/private2/400/600" alt="Garden Event" className="w-full h-80 object-cover rounded-sm mt-8"/>
        </div>
      </div>
    </div>
  </section>
);

const CSR = () => (
  <section id="csr" className="py-24 bg-[#5D2E28] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Community Support</h4>
        <h2 className="text-4xl md:text-5xl mb-6 font-medium">CSR Memberships</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">Become part of the Lenoir community. Support local independent winemakers while enjoying exclusive rewards and priority access.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CSR_TIERS.map((tier, idx) => (
          <div key={idx} className={`p-10 border border-white/10 rounded-sm flex flex-col ${idx === 1 ? 'bg-white/5 border-white/20' : ''}`}>
            <h3 className="text-2xl serif font-bold mb-2">{tier.name}</h3>
            <p className="text-3xl font-bold mb-8 text-[#E6A36E]">{tier.price}</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.benefits.map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-start space-x-3 text-sm text-gray-300">
                  <Star size={14} className="mt-1 text-[#E6A36E] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 border border-white/50 hover:bg-white hover:text-[#5D2E28] font-bold uppercase tracking-widest text-xs transition-all">
              Become a Member
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VisitUs = () => (
  <section id="visit" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Find Us</h4>
        <h2 className="text-4xl md:text-5xl mb-12">Visit Us</h2>
        
        <div className="space-y-10">
          <div className="flex items-start space-x-6">
            <div className="p-3 bg-[#FDFBF7] rounded-full text-[#5D2E28]"><MapPin size={24}/></div>
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-2">Location</p>
              <p className="text-gray-600 leading-relaxed text-lg">1807 S. First Street,<br/>Austin, Texas 78704</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="p-3 bg-[#FDFBF7] rounded-full text-[#5D2E28]"><Clock size={24}/></div>
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-2">Hours</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-gray-600">
                <p>Sun – Thu:</p><p>4:30 PM – 10:00 PM</p>
                <p>Fri – Sat:</p><p>4:30 PM – 10:30 PM</p>
                <p className="text-[#5D2E28] font-bold">Tuesday:</p><p className="text-[#5D2E28] font-bold">Closed</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-3 bg-[#FDFBF7] rounded-full text-[#5D2E28]"><Phone size={24}/></div>
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-2">Contact</p>
              <p className="text-gray-600 text-lg">(512) 215-9778</p>
              <p className="text-gray-600 text-lg">reservations@lenoirrestaurant.com</p>
            </div>
          </div>
        </div>

        <div id="reservations" className="mt-16 p-8 bg-[#FDFBF7] border border-gray-100 rounded-sm">
          <h3 className="text-2xl serif mb-4 font-bold">Make a Reservation</h3>
          <p className="text-gray-500 mb-8">Tables fill up fast. We recommend booking 2 weeks in advance.</p>
          <a href="https://resy.com/cities/aus/lenoir" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-5 bg-[#5D2E28] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#3d1e1a] transition-all">
            Reserve Now via Resy
          </a>
        </div>
      </div>
      
      <div className="relative group min-h-[500px] h-full">
        {/* Placeholder for Map */}
        <div className="w-full h-full bg-gray-100 rounded-sm overflow-hidden relative border border-gray-100">
          <div className="absolute inset-0 flex items-center justify-center bg-[#FDFBF7]">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-[#5D2E28]" size={48} />
              <p className="text-[#332C2B] font-bold serif text-xl mb-2">Lenoir Austin</p>
              <p className="text-gray-500 text-sm italic">Interactive Map View</p>
              <div className="mt-8 px-6 py-2 border border-[#5D2E28]/20 text-xs font-bold uppercase tracking-widest rounded-full cursor-pointer hover:bg-[#5D2E28] hover:text-white transition-all">
                Open in Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-[#FDFBF7]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h4 className="text-[#E6A36E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Experiences</h4>
        <h2 className="text-4xl md:text-5xl">What Diners Are Saying</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="text-center flex flex-col items-center">
            <div className="flex mb-6 text-[#E6A36E]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-xl serif italic mb-8 leading-relaxed">"{t.quote}"</p>
            <p className="font-bold text-sm tracking-widest uppercase">— {t.author}</p>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">{t.source}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 bg-[#332C2B] text-white text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl mb-6">Stay in the Loop</h2>
      <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
        Sign up for the latest news, seasonal menu updates, and upcoming events in the garden.
      </p>
      <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Your Email Address" 
          className="flex-grow bg-white/5 border border-white/20 px-6 py-4 rounded-sm focus:outline-none focus:border-[#E6A36E] transition-colors"
        />
        <button className="px-10 py-4 bg-white text-[#332C2B] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#E6A36E] hover:text-white transition-all">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1A1615] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div>
        <h3 className="serif text-3xl font-bold tracking-widest mb-8">LENOIR</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-8">
          Exceptional seasonal dining and curated wine experiences in the heart of Austin, Texas. Founded on a passion for local ingredients and global techniques.
        </p>
        <div className="flex space-x-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-[#E6A36E] transition-colors"><Instagram size={20}/></a>
          <a href="#" className="text-gray-400 hover:text-[#E6A36E] transition-colors"><Facebook size={20}/></a>
        </div>
      </div>
      
      <div>
        <p className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-[#E6A36E]">Quick Links</p>
        <ul className="space-y-4 text-sm text-gray-400">
          <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#menu" className="hover:text-white transition-colors">Seasonal Menu</a></li>
          <li><a href="#wine-club" className="hover:text-white transition-colors">Wine Club</a></li>
          <li><a href="#events" className="hover:text-white transition-colors">Events & Experiences</a></li>
          <li><a href="#csr" className="hover:text-white transition-colors">CSR Memberships</a></li>
        </ul>
      </div>

      <div>
        <p className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-[#E6A36E]">Contact</p>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="flex items-center space-x-3"><MapPin size={16}/> <span>1807 S. First St, Austin, TX 78704</span></li>
          <li className="flex items-center space-x-3"><Phone size={16}/> <span>(512) 215-9778</span></li>
          <li className="flex items-center space-x-3"><Mail size={16}/> <span>hello@lenoirrestaurant.com</span></li>
        </ul>
      </div>

      <div>
        <p className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-[#E6A36E]">Support</p>
        <ul className="space-y-4 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
      <p>&copy; 2024 Lenoir Restaurant. All Rights Reserved.</p>
      <p>Designed with <Heart size={10} className="inline text-[#E6A36E] mx-1" fill="currentColor"/> in Austin, Texas</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VisitUs />
      <MenuSection />
      <WineClub />
      <Events />
      <PrivateDining />
      <CSR />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
