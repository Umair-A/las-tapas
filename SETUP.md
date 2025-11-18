# Las Tapas Website - Setup Guide

## ✅ Project Complete

The website has been fully built with all requested features. Here's what's included:

### 🎨 Design Features
- ✅ Spanish-inspired color palette (Terracotta, Saffron, Cream, Charcoal, Gold)
- ✅ Playfair Display for headings, Inter for body text
- ✅ Luxurious, warm design with grain texture overlays
- ✅ Smooth animations with Framer Motion
- ✅ Ultra-smooth scrolling with Lenis

### 📱 Sections Implemented
1. **Navbar** - Fixed, transparent to solid on scroll, mobile hamburger menu
2. **Hero** - Full-screen with parallax background, CTAs
3. **Quick Info Bar** - Sticky bar with hours, location, phone, Resy link
4. **About** - Split layout with story and Seattle Times quote
5. **Menu** - Complete menu with all categories, sticky sidebar, mobile tabs
6. **Gallery** - Masonry grid with hover effects and lightbox
7. **Reservations** - Custom form with EmailJS + Resy button
8. **Location** - Google Maps embed, hours table, parking info
9. **Footer** - Links, contact info, social media

### 🛠️ Technical Features
- ✅ TypeScript for type safety
- ✅ React Router for routing (with 404 page)
- ✅ React Hook Form + Zod validation
- ✅ EmailJS integration (needs configuration)
- ✅ Fully responsive (mobile-first)
- ✅ Lazy loading images
- ✅ SEO optimized meta tags
- ✅ Accessible (semantic HTML, ARIA labels)

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure EmailJS (Optional)
Create a `.env` file:
```env
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_SERVICE_ID=your_service
VITE_EMAILJS_TEMPLATE_ID=your_template
```

### 3. Update Menu Data
Edit `src/lib/menuData.ts` with actual menu items from the restaurant.

### 4. Replace Placeholder Images
Update images in:
- `src/sections/Hero.tsx` - Hero background
- `src/sections/About.tsx` - About section
- `src/sections/Gallery.tsx` - Gallery images

### 5. Update Google Maps Embed
Get the actual embed URL from Google Maps for 310 1st Ave S, Seattle, WA 98104 and update `src/sections/Location.tsx`.

### 6. Run Development Server
```bash
npm run dev
```

### 7. Build for Production
```bash
npm run build
```

## 📝 Next Steps

1. **Get Real Content**
   - Replace menu items in `src/lib/menuData.ts` with actual menu
   - Add real restaurant photos
   - Update hours if different
   - Add actual owner photo/story

2. **Configure EmailJS**
   - Sign up at emailjs.com
   - Create service and template
   - Add credentials to `.env`

3. **Get Google Maps Embed**
   - Go to Google Maps
   - Search for "310 1st Ave S, Seattle, WA 98104"
   - Click "Share" → "Embed a map"
   - Copy the iframe src URL
   - Replace in `src/sections/Location.tsx`

4. **Add Favicon**
   - Create a favicon.ico or favicon.svg
   - Place in `public/` directory
   - Update `index.html` if needed

5. **Test Everything**
   - Test on mobile devices
   - Test form submission
   - Test all navigation links
   - Run Lighthouse audit

## 🎯 Performance Targets

The site is optimized for:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📞 Support

For questions or issues, refer to the main README.md file.

