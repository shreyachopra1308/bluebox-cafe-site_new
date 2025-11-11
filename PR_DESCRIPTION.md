# Blue Box Café Landing Page Rebuild

## Summary

Complete rebuild and polish of the Blue Box Café landing page with a premium coffee-focused design. Updated Hero, Navbar, About section, and Footer with new branding, improved spacing, contrast, and accessibility features.

## Changes Made

### Design System
- **New Color Palette**: 
  - Primary: `#0FB3B8` (Tiffany blue)
  - Coffee: `#8B5E3C` (warm coffee accent)
  - Dark Text: `#0F172A`
  - Page Background: `#F7F9F9`
  - Muted: `#64748B`
- **Typography**: Switched to Inter (body) and Poppins (headings) from Google Fonts

### Components Updated

#### Hero Section (`src/pages/Home.tsx`)
- Full-width hero with 68-78vh height (responsive)
- Dark gradient overlay for readable white text
- New headline: "A premium coffee experience — crafted with care."
- New subheadline with warm, inviting copy
- Primary CTA: "Reserve a Table" (prominent button)
- Secondary CTA: "View Menu" (outline style)
- Meta row with hours and address below CTAs
- Proper alt text: "Barista pouring latte art into a ceramic cup"

#### About Section (`src/pages/Home.tsx`)
- Two-column layout (text + image) on desktop
- New copy about sustainability and neighborhood focus
- CTAs: "See Menu" and "Get Directions"
- Lazy-loaded image with proper alt text

#### Navbar (`src/components/Navbar.tsx`)
- New logo: "BB" square + "Blue Box Café" text
- Sticky behavior with backdrop blur on scroll
- Navigation links: About, Menu, Gallery, Contact
- Prominent "Reserve" CTA button
- Mobile hamburger menu with full navigation
- Keyboard accessible with proper ARIA labels

#### Footer (`src/components/Footer.tsx`)
- 3-column layout: Brand/Blurb, Quick Links, Contact
- Contact info: email, phone, address, hours
- Social media icons (Instagram, Facebook, Twitter)
- Dark background with proper contrast

### Configuration Files

#### `tailwind.config.ts`
- Added new color palette (primary, coffee, darktext, pagebg, muted)
- Added Inter and Poppins font families
- Maintained backward compatibility with existing colors

#### `index.html`
- Updated meta description for SEO
- Added Inter and Poppins Google Fonts
- Updated structured data (JSON-LD) with new contact info and hours

#### `src/index.css`
- Updated base font to Inter
- Updated heading font to Poppins
- Set proper text colors for accessibility

### Images
- Created `public/images/` directory
- Added placeholder images:
  - `hero.jpg` - Hero background
  - `coffee.jpg` - Coffee imagery
  - `interior.jpg` - Café interior
- All images have descriptive alt text
- Lazy loading implemented for non-hero images

## Accessibility Improvements
- ✅ All images have descriptive alt text
- ✅ Buttons have `aria-label` attributes
- ✅ Semantic HTML structure (one `<h1>` per page)
- ✅ Keyboard navigation support
- ✅ Color contrast meets WCAG AA standards
- ✅ Proper heading hierarchy

## SEO Improvements
- ✅ Updated meta description
- ✅ Structured data (JSON-LD) for LocalBusiness/Restaurant
- ✅ Proper semantic HTML
- ✅ Descriptive alt text on all images

## Performance
- ✅ Lazy loading for non-hero images
- ✅ Optimized font loading with preconnect
- ✅ Efficient Tailwind classes (no inline styles)

## Testing Checklist

- [x] Hero updated with new copy and design
- [x] Navbar updated with new logo and sticky behavior
- [x] About section updated with new copy
- [x] Footer updated with contact info and social icons
- [x] Tailwind colors added
- [x] SEO meta added
- [x] Images created in `public/images/`
- [x] Accessibility features implemented
- [ ] Optional: Swap in high-res production images (manual)

## Preview

Run `npm run dev` and visit `http://localhost:3000/` to preview the changes.

## Notes

- Images in `public/images/` are placeholders copied from existing assets. Replace with high-resolution production images when available.
- All existing routes and backend integrations remain unchanged.
- Mobile-first responsive design implemented throughout.

