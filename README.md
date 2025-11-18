# Las Tapas - Seattle's Authentic Spanish Soul

A modern, high-performance website for Las Tapas, Seattle's iconic Spanish tapas bar.

## 🚀 Features

- **Modern Tech Stack**: Vite + React 18 + TypeScript
- **Beautiful Design**: Tailwind CSS with custom Spanish-inspired color palette
- **Smooth Animations**: Framer Motion for buttery-smooth interactions
- **Smooth Scrolling**: Lenis for ultra-smooth scroll experience
- **Fully Responsive**: Perfect on all devices
- **Accessible**: WCAG compliant with semantic HTML
- **Performance Optimized**: Lazy loading, optimized images, fast load times

## 🛠️ Tech Stack

- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Router v6** - Routing
- **React Hook Form + Zod** - Form validation
- **EmailJS** - Contact form handling
- **Lenis** - Smooth scrolling
- **Lucide React** - Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS (optional, for contact form):
   - Create a `.env` file based on `.env.example`
   - Get your EmailJS credentials from [emailjs.com](https://www.emailjs.com/)
   - Add them to your `.env` file

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Design System

### Colors
- **Terracotta**: `#9A3412` - Primary brand color
- **Saffron**: `#F59E0B` - Accent color
- **Cream**: `#FAF3DD` - Background
- **Charcoal**: `#1F2937` - Text
- **Gold**: `#D4AF37` - Highlights

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📱 Sections

1. **Hero** - Full-screen introduction with CTAs
2. **Quick Info** - Hours, location, phone, reservations
3. **About** - Restaurant story and history
4. **Menu** - Complete menu with categories
5. **Gallery** - Beautiful masonry grid of food photos
6. **Reservations** - Contact form and Resy integration
7. **Location** - Google Maps embed and hours
8. **Footer** - Links, contact info, social media

## 🔧 Configuration

### EmailJS Setup

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to `.env`:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_key
   VITE_EMAILJS_SERVICE_ID=your_service
   VITE_EMAILJS_TEMPLATE_ID=your_template
   ```

### Menu Data

Menu items are stored in `src/lib/menuData.ts`. Update this file with actual menu items from the restaurant.

### Images

Replace placeholder images in:
- `src/sections/Hero.tsx` - Hero background
- `src/sections/About.tsx` - About section image
- `src/sections/Gallery.tsx` - Gallery images

## 📄 License

Private - Las Tapas Restaurant
