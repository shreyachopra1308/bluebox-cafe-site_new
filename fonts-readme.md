# Font Analysis & Implementation

## Reference Site Analysis
**Reference:** Café Kitsuné (cafekitsune.vercel.app)

### Font Detection
After inspecting the reference site, the following was found:
- The site uses a custom/proprietary serif font for headings (likely a commercial font)
- Body text uses a clean sans-serif (appears to be Inter or similar)

### Font Decision
Since the exact reference font is proprietary and not available for distribution, we've implemented the closest open web alternative:

**Heading Font:** Playfair Display
- Matches the elegant, refined serif aesthetic
- Similar letter-spacing and weight characteristics
- Computed values to match reference:
  - Desktop: 56px, line-height: 1.05, letter-spacing: -0.02em, weight: 400
  - Tablet: 44px
  - Mobile: 36px

**Body Font:** Inter (Variable)
- Clean, modern sans-serif matching the reference
- Weights: 300, 400, 500, 600
- Size: 16px desktop, 15px mobile
- Line-height: 1.6

### Typographic Scale
All values computed to visually match the reference site's header metrics:

```css
/* Desktop */
h1: 56px / 1.05 / -0.02em / 400
h2: 32px / 1.1 / 400
h3: 22px / 1.2 / 400
body: 16px / 1.6

/* Tablet */
h1: 44px
h2: 28px
h3: 20px

/* Mobile */
h1: 36px / 1.08
h2: 24px / 1.15
h3: 18px / 1.25
body: 15px
```

### Implementation
- Fonts loaded via Google Fonts with preconnect
- Playfair Display: 400 weight (regular)
- Inter: Variable font (300-600 weights)
- Fallback stack includes system fonts for performance

