# Acceptance Checklist
## The Blue Box Café Landing Page Rebuild

---

## Visual Checks

### ✅ Hero Section
- [x] H1 "A Moment in Blue" is ≥ 48px visually at desktop width
- [x] H1 color is white (#FFFFFF) or cream (#F6F4F2)
- [x] Hero has 45% cream overlay with gradient
- [x] Content is centered, max-width 900px
- [x] Hero fade-in animation works (opacity 0→1, translateY 20→0, 380ms)

### ✅ Typography
- [x] Menu item names are readable on dark cards
- [x] Menu item names use color #F6F4F2 or #FFFFFF
- [x] Menu item names have text-shadow: 0 1px 2px rgba(0,0,0,0.6)
- [x] Menu item names have font-weight: 600
- [x] Descriptions use rgba(246,244,242,0.9)
- [x] All headings meet WCAG AA contrast (≥3:1)
- [x] All body text meets WCAG AA contrast (≥4.5:1)

### ✅ Navigation
- [x] Header contains only ONE Shop link (no duplicates)
- [x] Nav is rounded pill, centered, max-width 900px
- [x] Nav links are 14px Inter, 0.06em tracking, uppercase
- [x] Nav links have underline reveal on hover (180ms)
- [x] Reserve button is Tiffany pill (#0ABAB5)
- [x] Cart icon is dark pill with hover states

### ✅ Buttons & Interactions
- [x] Dark button (cart/reserve) shows hover:
  - Background lightens
  - translateY(-3px) elevation
  - Visible focus ring when tabbed
- [x] Primary CTA hover: #14CFCB (Tiffany Boost) + translateY(-3px)
- [x] Focus ring: rgba(10,186,181,0.22)
- [x] All interactive elements keyboard-focusable

### ✅ Cards & Images
- [x] Card border-radius: 14px
- [x] Card has inner border: rgba(255,255,255,0.02)
- [x] Card shadow: 0 6px 18px rgba(0,0,0,0.4)
- [x] Images rounded: 12px
- [x] Image hover scale: 1.03 (300ms transition)

### ✅ Layout & Spacing
- [x] Max width: 1240px (centered)
- [x] Section spacing: 120px top/bottom (desktop)
- [x] Section spacing: 60px top/bottom (tablet)
- [x] Section spacing: 48px top/bottom (mobile)
- [x] Grid gutters: 28px

---

## Technical Checks

### ✅ Performance
- [x] Images lazy-loaded (below-the-fold)
- [x] Hero image eager-loaded (above-the-fold)
- [x] CSS critical inlined
- [x] JS deferred (non-critical)

### ✅ Accessibility
- [x] All images have alt text
- [x] All buttons have aria-labels
- [x] Focus indicators visible
- [x] Keyboard navigation works
- [x] Contrast ratios meet WCAG AA

### ✅ Responsive
- [x] Desktop (≥1025px): Full layout
- [x] Tablet (769px-1024px): Adjusted spacing
- [x] Mobile (≤768px): Stacked layout, reduced spacing

---

## Design System Compliance

### ✅ Colors
- [x] Tiffany: #0ABAB5
- [x] Tiffany Boost: #14CFCB
- [x] Cream: #F6F4F2
- [x] Background Deep: #2C2420
- [x] Gold: #C9A85F
- [x] White: #FFFFFF

### ✅ Typography
- [x] H1: 56px Playfair, 500 weight, -0.01em tracking
- [x] H2: 32px Playfair, 500 weight, -0.01em tracking
- [x] H3: 22px Playfair, 500 weight, -0.01em tracking
- [x] Body: 16px Inter, 1.7 line-height
- [x] Year accents: Playfair Italic, #0ABAB5

### ✅ Microinteractions
- [x] Hero fade-in: 380ms cubic-bezier(0.2,0.9,0.2,1)
- [x] Nav underline: 180ms ease-in
- [x] Button hover: 250ms ease
- [x] Image hover: 300ms ease

---

## Files Delivered

- [x] `src/pages/Home.tsx` - Rebuilt landing page
- [x] `src/components/Navbar.tsx` - Updated header/nav
- [x] `src/index.css` - Updated styles
- [x] `src/styles/typography.css` - Typography system
- [x] `styleguide.md` - Complete style guide
- [x] `acceptance.md` - This checklist

---

## Notes

- All specifications from the design brief have been implemented
- Colors, typography, spacing, and interactions match exact requirements
- WCAG AA contrast compliance verified
- Performance optimizations applied
- Responsive design tested across breakpoints

