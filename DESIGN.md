---
design_system: Limon Ranch
primary_method: Impeccable
supporting_guidance:
  - Taste Skill for hierarchy and anti-generic review
  - Emil Kowalski skills for restrained interaction and motion
design_variance: 5
motion_intensity: 2
information_density: 3
---

# Limon Ranch Design System

## Overview

The interface should feel like the property: warm, grounded, peaceful and practical. Authentic photography carries the strongest visual weight. Typography, colour and spacing should frame that photography and help guests move confidently from discovery to enquiry.

The established website is the design authority. Refinements should strengthen its hospitality character without turning it into a generic resort or luxury-hotel template.

## Colours

Use the semantic tokens defined in `src/styles.css` rather than introducing one-off browns or beiges.

- **Background:** warm natural canvas for full-page and alternating sections.
- **Card:** light cream surface for accommodation, booking and information panels.
- **Foreground:** deep earth brown for headings and primary text.
- **Muted foreground:** softer earth brown for descriptions and supporting information.
- **Primary:** clay brown for the primary booking action and important accents.
- **Primary hover:** deeper clay for intentional hover feedback.
- **Accent:** sun-warmed terracotta for highlights, rules and secondary interaction.
- **Gold / gold soft:** restrained heritage accents on eyebrows and dark surfaces.
- **Ranch ink:** deepest brown for the footer and high-contrast overlays.
- **WhatsApp green:** reserved for the recognizable floating WhatsApp action.

Photography may use a dark neutral overlay where text legibility requires it. Do not add decorative gradients elsewhere.

## Typography

- **Display:** Playfair Display for headings. It supports the property’s established, hospitable character.
- **Sans:** Montserrat for navigation, body copy, labels, forms and buttons.
- Keep display headings balanced and readable; avoid oversized billboard typography.
- Use uppercase, letter-spaced eyebrow text sparingly for wayfinding.
- Body copy should remain comfortable at 16px or larger with generous line height.

## Layout and spacing

- Use the established `max-w-7xl` content frame and aligned page gutters.
- Keep mobile gutters at 20px, tablet gutters around 32–40px and desktop gutters around 40px.
- Section spacing should be generous on desktop and more efficient on tablet so the page does not feel stretched.
- Prefer strong photography and clear editorial groupings over repeated decorative cards.
- At tablet widths, use two-column layouts only when each column retains comfortable text and control widths.
- Let the footer move from one column on mobile, through a balanced two-column tablet layout, to its full desktop structure.

## Elevation and depth

- Use subtle borders and small shadows to separate functional surfaces such as the booking panel.
- Avoid glass effects, heavy blur and dramatic floating cards.
- Image overlays should exist for text contrast, not decoration.

## Shapes

- Use the established modest 4px radius for controls and panels.
- Circular shapes are reserved for icons, social links and the recognizable WhatsApp action.
- Avoid pill-shaped text containers and oversized rounded cards.

## Components

### Navigation

- Maintain a stable warm header with clear text contrast.
- Use a restrained underline or colour change for hover and keyboard focus.
- Preserve the existing accessible mobile menu, Escape handling and focus return.

### Buttons and links

- Primary booking actions use the primary clay token with a darker hover state.
- Secondary actions use a border and foreground colour, gaining accent emphasis on hover.
- Focus rings must remain prominent and consistent.
- Labels should state the destination or action, especially for WhatsApp and maps.

### Accommodation and booking

- Explain clearly that rates are supplied directly by the ranch team after enquiry.
- Do not display accommodation prices publicly.
- The form should remain a booking enquiry that creates a WhatsApp draft; never imply confirmation or live inventory.

### Photography

- Use existing authentic property and regional images with descriptive alt text.
- Preserve natural colour and crop for the subject rather than applying stylized filters.
- Hover zoom, where present, must be subtle, fast and limited to fine-pointer devices.

### Footer

- Use ranch ink as the dark anchor for the page.
- Keep property navigation, experiences, social links and the existing Ewaso Digital credit legible.
- Reflow at tablet widths to prevent narrow columns and awkward wrapping.

## Motion

- Motion should clarify entry, state or interaction and should never delay reading.
- Entrance reveals use opacity and a short vertical movement only.
- Hover motion should complete quickly and use `transform` or `opacity`.
- Animate named properties instead of `transition-all`.
- Respect `prefers-reduced-motion`; content must remain visible and usable without animation.

## Do

- Lead with real photography and clear accommodation information.
- Keep the WhatsApp enquiry path prominent.
- Use semantic design tokens consistently.
- Test keyboard interaction and mobile, tablet and desktop layouts.
- Write specific, verifiable hospitality copy.

## Do not

- Add unverified amenities, policies or promises.
- Introduce a generic luxury-hotel aesthetic.
- Add glassmorphism, ornamental gradients or excessive animation.
- Use oversized headings, pills or novelty interactions.
- Compete with WhatsApp by adding another booking or payment journey.
