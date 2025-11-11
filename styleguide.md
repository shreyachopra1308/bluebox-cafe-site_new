# The Blue Box Café — Style Guide
## Café Kitsuné Precision + Tiffany Luxury

---

## Color Palette

### Primary Colors
- **Tiffany**: `#0ABAB5` — Primary brand color, CTAs
- **Tiffany Boost**: `#14CFCB` — Hover state for Tiffany elements
- **Cream**: `#F6F4F2` — Text on dark backgrounds, secondary elements
- **Background Deep**: `#2C2420` — Primary dark background
- **Gold**: `#C9A85F` — Accent color for prices, highlights
- **White**: `#FFFFFF` — Headings, primary text on dark

### Usage
- **Text**: White (#FFFFFF) or Cream (#F6F4F2) on dark backgrounds
- **CTAs**: Tiffany (#0ABAB5) with white text, hover to Tiffany Boost (#14CFCB)
- **Accents**: Gold (#C9A85F) for prices, Tiffany (#0ABAB5) for year accents
- **Overlays**: Cream at 45% opacity for hero sections

---

## Typography

### Font Families
- **Heading**: Playfair Display (serif)
  - Weights: 400, 500, 700
  - Fallback: Georgia, serif
  
- **Body**: Inter (sans-serif)
  - Weights: 300, 400, 500, 600
  - Fallback: system-ui, -apple-system, sans-serif

### Typographic Scale

#### Desktop
- **H1**: 56px / 1.05 line-height / -0.01em letter-spacing / 500 weight
- **H2**: 32px / 1.3 line-height / -0.01em letter-spacing / 500 weight
- **H3**: 22px / 1.4 line-height / -0.01em letter-spacing / 500 weight
- **Body**: 16px / 1.7 line-height / 400 weight
- **Subhead**: 20px / 1.7 line-height / 300 weight

#### Tablet (769px - 1024px)
- **H1**: 48px
- **H2**: 30px
- **H3**: 21px
- **Body**: 16px

#### Mobile (≤768px)
- **H1**: 36px
- **H2**: 28px
- **H3**: 20px
- **Body**: 15px

### Special Typography
- **Year Accents**: Playfair Display Italic, 500 weight, color #0ABAB5
- **Menu Item Names**: Playfair Display, 600 weight, color #F6F4F2 or #FFFFFF, text-shadow: 0 1px 2px rgba(0,0,0,0.6)
- **Descriptions**: Inter, 16px, color rgba(246,244,242,0.9)
- **Navigation**: Inter, 14px, 0.06em letter-spacing, uppercase

---

## Layout & Spacing

### Container
- **Max Width**: 1240px (centered)
- **Hero Content Max Width**: 900px (centered)
- **Nav Max Width**: 900px (centered)

### Section Spacing
- **Desktop**: 120px top / 120px bottom
- **Tablet**: 60px top / 60px bottom
- **Mobile**: 48px top / 48px bottom

### Grid
- **Columns**: 12-column grid
- **Card Gutters**: 28px
- **Container Padding**: 24px (1.5rem) desktop, 16px mobile

---

## Components

### Hero Section
- **Height**: 95vh minimum
- **Overlay**: 45% cream (#F6F4F2) with gradient from black 18% to transparent
- **Content**: Centered, max-width 900px
- **H1**: "A Moment in Blue" (56px Playfair)
- **Subhead**: 20px Inter, 1.7 line-height
- **Animation**: Fade-in + slide-up (opacity 0→1, translateY 20→0, 380ms cubic-bezier(0.2,0.9,0.2,1))

### Primary CTA Button
- **Background**: #0ABAB5 (Tiffany)
- **Hover**: #14CFCB (Tiffany Boost)
- **Focus Ring**: rgba(10,186,181,0.22)
- **Hover Elevation**: translateY(-3px)
- **Shape**: Rounded pill
- **Padding**: px-8 py-4
- **Text**: 14px Inter, uppercase, 0.05em tracking

### Secondary CTA Button
- **Style**: Outline with cream border (#F6F4F2)
- **Hover**: Subtle inner shadow
- **Shape**: Rounded pill

### Cards
- **Border Radius**: 14px
- **Border**: 1px solid rgba(255,255,255,0.02)
- **Shadow**: 0 6px 18px rgba(0,0,0,0.4)
- **Padding**: 32px

### Images
- **Border Radius**: 12px
- **Hover Scale**: 1.03
- **Transition**: 300ms ease

---

## Navigation

### Header
- **Style**: Rounded pill, centered
- **Max Width**: 900px
- **Sticky**: Top with 12px offset
- **Background**: Semi-transparent dark

### Nav Links
- **Font**: Inter, 14px
- **Letter Spacing**: 0.06em
- **Case**: Uppercase
- **Hover**: Underline reveal (width 0→100%, 180ms)
- **Color**: #F6F4F2

### Actions
- **Reserve Button**: Tiffany pill (same as primary CTA)
- **Cart Icon**: Dark pill (#2C2420), hover lighten + translateY(-3px)
- **Shop Link**: Only one instance (no duplicates)

---

## Microinteractions

### Timing Functions
- **Hero Fade-in**: 380ms cubic-bezier(0.2, 0.9, 0.2, 1)
- **Nav Underline**: 180ms ease-in
- **Button Hover**: 250ms ease
- **Image Hover**: 300ms ease

### Hover States
- **Primary Buttons**: Background lighten + translateY(-3px) + shadow
- **Dark Buttons**: Background lighten + translateY(-3px) + focus ring
- **Text Links**: Underline reveal
- **Images**: Scale 1.03

### Focus States
- **All Interactive Elements**: Visible focus ring
- **Tiffany Elements**: rgba(10,186,181,0.22) ring
- **Ring Offset**: 2px

---

## Accessibility

### Contrast Ratios
- **Body Text**: Minimum 4.5:1 (WCAG AA) — White/Cream on #2C2420 = ~21:1 ✓
- **Headings**: Minimum 3:1 (WCAG AA) — White on #2C2420 = ~21:1 ✓
- **Large Text**: Minimum 3:1 (WCAG AA) ✓

### Keyboard Navigation
- All interactive elements keyboard accessible
- Focus indicators: 2px ring in Tiffany Blue
- Tab order: Logical flow

### ARIA Labels
- All buttons and links have descriptive labels
- Modal controls properly labeled
- Form inputs have associated labels

---

## Performance

### Images
- **Format**: WebP with JPG fallback
- **Lazy Loading**: Below-the-fold images
- **Responsive**: srcset for different screen sizes
- **Hero**: Eager loading (above-the-fold)

### CSS
- **Critical CSS**: Inlined
- **Non-critical**: Deferred

### JavaScript
- **Deferred**: Non-critical scripts
- **Async**: Analytics and tracking

---

## Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

---

## CSS Variables

```css
:root {
  --tiffany: #0ABAB5;
  --tiffany-boost: #14CFCB;
  --cream: #F6F4F2;
  --bg-deep: #2C2420;
  --gold: #C9A85F;
  --white: #FFFFFF;
  --max-width: 1240px;
  --base-lineheight: 1.7;
}
```

---

## Usage Notes

1. **Whitespace**: Be generous — let elements breathe
2. **Typography**: Use heading font sparingly, body font for most content
3. **Motion**: Subtle and purposeful — never distracting
4. **Contrast**: Always ensure WCAG AA compliance
5. **Consistency**: Use exact color values and spacing tokens
