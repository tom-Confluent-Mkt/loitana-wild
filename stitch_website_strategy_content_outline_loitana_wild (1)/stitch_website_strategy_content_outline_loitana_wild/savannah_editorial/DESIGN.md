# Design System Strategy: The Savannah Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Safari Curator."** This system moves away from the loud, saturated "tropical" aesthetics of mass-market travel sites and instead adopts the quiet authority of a high-end, linen-bound coffee table book. 

To achieve this, we break the "template" look through **Intentional Asymmetry** and **Tonal Depth**. We treat the digital viewport as a printed page where whitespace is not "empty" but is a deliberate structural element. Layouts should favor offset images, overlapping typography, and a "Photographic-First" hierarchy where the UI retreats to allow the rugged beauty of the Kenyan landscape to lead.

## 2. Color Theory: The Earth & The Dust
Our palette is derived from the muted, sun-bleached reality of the savannah. We use desaturated tones to evoke a sense of heritage and permanence.

### Palette Roles
- **Primary (`#50644b`):** A dusty, sage-like green. Use this for moments of quiet action—functional icons and primary call-to-actions.
- **Secondary (`#77593a`):** A sun-dried clay. This is our "warmth" token, used for secondary interactions and to anchor the organic feel of the brand.
- **Background (`#faf9f4`):** Not a sterile white, but a warm parchment that reduces eye strain and feels like high-grade paper stock.
- **Tertiary (`#58615e`):** A deep slate charcoal for moments requiring high contrast or rugged grounding.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containment. 100% opaque lines create a "grid-locked" feel that contradicts our organic North Star. 
- Boundaries must be defined solely through **Background Color Shifts**. For example, a `surface-container-low` section sitting against a `surface` background provides all the separation a user needs.
- **Signature Textures:** For hero backgrounds or major CTA blocks, use a subtle linear gradient transitioning from `primary` to `primary-container`. This adds "visual soul" and mimics the natural gradient of a horizon.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
- **Level 1 (Base):** `surface` (#faf9f4)
- **Level 2 (In-page content blocks):** `surface-container-low` (#f4f4ee)
- **Level 3 (Interactive Cards):** `surface-container-lowest` (#ffffff) to create a subtle "lift."

## 3. Typography: The Editorial Voice
Our typography scale is designed to mimic a high-end periodical, balancing the romanticism of the serif with the utility of the sans-serif.

- **Display & Headline (Newsreader):** Use `display-lg` through `headline-sm` for all evocative copy. Newsreader’s variable weights allow for a "bespoke" feel. Large display type should often be set in `on-surface` or `primary` to anchor the page.
- **Body & Labels (Manrope):** Use Manrope for all functional and long-form text. It is clean, understated, and provides the necessary "breathing room" between high-impact serif headlines.
- **Hierarchy Hint:** To convey "Safari Editorial," try pairing a `label-md` (uppercase, tracked out +5%) immediately above a `display-md` headline.

## 4. Elevation, Depth & Glassmorphism
We avoid traditional drop shadows which feel "digital" and "cheap." Instead, we use **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. A `surface-container-lowest` card placed on a `surface-dim` background creates a soft, natural lift without a single pixel of shadow.
- **Ambient Shadows:** If a floating element (like a Navigation Bar or Modal) requires a shadow, it must be an **Ambient Shadow**:
  - Blur: 24px - 40px.
  - Opacity: 4% - 8%.
  - Color: Use a tinted version of `on-surface` (dark green/slate) rather than pure black.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. This is a "Ghost Border"—felt, but not seen.
- **Glassmorphism:** For floating navigation or over-image content, use semi-transparent `surface` colors with a `backdrop-blur` of 12px. This allows the colors of the Kenyan landscape to bleed through the UI, integrating the interface with the photography.

## 5. Components & UI Primitives

### Buttons
- **Primary:** Background `primary`, text `on-primary`. Subtle roundness (`0.25rem`). No border.
- **Secondary:** Background `secondary-container`, text `on-secondary-container`. 
- **Tertiary (Ghost):** No background. Text `primary`. Use Manrope `label-md` for the font to keep it functional.

### Input Fields & Text Areas
- **Styling:** Use a `surface-container-low` fill. 
- **State:** On focus, transition the background to `surface-container-lowest` and apply a 1px "Ghost Border" using `primary` at 20% opacity. Avoid heavy "focus rings."

### Cards & Lists
- **The Divider Ban:** Strictly forbid the use of horizontal divider lines (`<hr>`). 
- **Separation:** Use vertical white space (from the Spacing Scale, e.g., `spacing-8` or `spacing-12`) or subtle background shifts between `surface-container` levels to separate content.
- **Imagery:** Cards should feature full-bleed imagery where possible, with a `0.25rem` corner radius.

### Signature Component: The "Editorial Feature"
A specialized component for this system: A full-width layout block where text is offset from the center and partially overlaps a high-resolution image. Use `surface-container-highest` for the text background with a 60% opacity backdrop-blur to maintain the "Savannah Editorial" feel.

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical margins (e.g., more padding on the left than the right) for editorial storytelling sections.
- **Do** use the `primary-fixed-dim` token for disabled states to keep them within the earthy color family.
- **Do** prioritize high-quality, desaturated photography. The UI should feel like a frame for the photos.

### Don’t
- **Don’t** use pure black (#000000) for text. Use `on-surface` (#2f342d) to keep the look soft and "ink-on-paper."
- **Don’t** use large corner radii. Stick to `DEFAULT` (0.25rem) to maintain a structured, premium architectural feel.
- **Don’t** use bright, "safety" yellows or golds. Use the `secondary` clay tones for highlights.