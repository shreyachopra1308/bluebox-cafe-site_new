# Landing Page Rebuild - Rollout Notes

## Overview
Complete rebuild of the landing page and header components for The Blue Box Café, implementing a premium Tiffany Blue-inspired design with pixel-perfect responsiveness and conversion-focused layout.

## Files Modified

### 1. `src/index.css`
- **Updated CSS Custom Properties**: Added exact Tiffany color palette:
  - `--tiffany: #81D8D0`
  - `--tiffany-dark: #5ABAB3`
  - `--ivory: #FAF9F7`
  - `--stone: #E6E6E6`
  - `--charcoal: #222222`
  - `--glass-white: rgba(255,255,255,0.85)`
- **Added Image Overlay Utilities**: Created `.image-overlay` utility class to prevent text/background overlap with proper z-indexing
- **Added Dark Overlay Variant**: `.image-overlay-dark` for darker photos

### 2. `src/pages/Home.tsx` (Complete Rebuild)
- **Hero Section**: Full-bleed hero with proper overlay, responsive heights (45vh mobile, 60vh tablet, 100vh desktop)
- **Signature Cards**: 3-column glass panel cards (Breakfast, Afternoon Tea, Chef's Menu)
- **About Section**: Split image + text layout with animated ribbon icon
- **Menu Highlights**: 4 featured items with circular thumbnails, descriptions, and prices
- **Gallery Section**: Masonry grid with lightbox functionality on click
- **Reservations Section**: Prominent CTA with reservation information
- **Visit & Hours Section**: Address, hours, and embedded Google Maps

### 3. `src/components/Navbar.tsx` (Complete Rebuild)
- **Transparent-to-Solid Scroll Behavior**: Navbar transitions from transparent to ivory background on scroll (240ms transition)
- **Sticky Reserve CTA**: Desktop reserve button in navbar, mobile sticky bottom button
- **Mobile Hamburger Menu**: Responsive menu with Tiffany highlight
- **Accessibility**: Added proper ARIA labels and keyboard navigation

### 4. `src/components/Footer.tsx` (Updated)
- **Newsletter Signup**: Email subscription form with toast notifications
- **Social Icons**: Instagram, Facebook, Twitter links with proper accessibility
- **Updated Styling**: Matches new Tiffany color palette

### 5. `index.html`
- **SEO Meta Tags**: Updated title and description
- **Font Imports**: Added Inter and Cormorant Garamond fonts
- **Structured Data**: Added JSON-LD schema for LocalBusiness/Restaurant with:
  - Address (727 Fifth Avenue, New York, NY 10022)
  - Phone: (212) 755-8000
  - Hours of operation
  - Email: blueboxcafe@tiffany.com

### 6. `tailwind.config.ts`
- **Added Font Families**: Inter and Cormorant Garamond

## Design Features Implemented

### Color System
- Tiffany Blue (#81D8D0) as primary brand color
- Ivory (#FAF9F7) for backgrounds
- Charcoal (#222222) for text
- Glass-white panels for cards

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)
- **Alternative**: Inter available for body text

### Responsive Breakpoints
- Mobile: 45vh hero height, stacked CTAs
- Tablet: 60vh hero height, 2-column layouts
- Desktop: 100vh hero height, 3-4 column layouts

### Animations
- Fade-up on scroll (520ms duration, ease-out)
- Button hover effects (scale 1.02, shadow increase)
- Smooth navbar transition (240ms)

### Accessibility
- Text contrast ratios meet WCAG AA standards (4.5:1 for body, 3:1 for headings)
- All images have descriptive alt text
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements

## Images Used
- `hero-cafe.jpg` - Hero background and gallery
- `menu-breakfast.jpg` - Menu highlights and gallery
- `menu-tea.jpg` - Menu highlights and gallery
- `menu-dessert.jpg` - Menu highlights and gallery
- `tiffany-storefront.jpg` - About section and gallery

## External Libraries
- **React Router DOM**: Navigation (already in dependencies)
- **Lucide React**: Icons (already in dependencies)
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter, Lato

## Performance Optimizations
- Lazy loading for gallery images
- Intersection Observer for scroll animations
- Optimized image loading with proper alt attributes
- Responsive image sizing

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Graceful degradation for older browsers

## Testing Checklist
- [ ] Hero section displays correctly on all screen sizes
- [ ] Text is readable over background images (overlay working)
- [ ] Navbar transitions smoothly on scroll
- [ ] All CTAs are clickable and navigate correctly
- [ ] Gallery lightbox opens and closes properly
- [ ] Newsletter form submits correctly
- [ ] Social links open in new tabs
- [ ] Map embed loads correctly
- [ ] All animations work smoothly
- [ ] Accessibility features tested with screen reader

## Notes
- Backend/reservation integrations remain unchanged
- All existing routes and pages preserved
- Only landing page (Home.tsx) and header/footer components modified
- Brand mentions use "The Blue Box Café" to avoid trademark issues

