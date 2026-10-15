# Healthy Meals

A responsive healthy meals landing page built with Expo, React Native for Web, and NativeWind v4 (Tailwind CSS utility classes).

## Run

```bash
npx expo start --web --clear
```

## Structure

```text
assets/images/        Licensed food photography
src/
  components/         Reusable UI: Header, Button, SectionHeading, MealCard, PricingCard, TestimonialCard, FAQItem
  sections/            One component per landing page section
  data/content.js      All copy and repeated card content
  App.jsx               Page layout: header followed by sections
index.js                Expo entry point
```

## Notes

- Styling uses NativeWind `className` props. Brand colors and the heading font are defined in `tailwind.config.js`.
- Navigation links and buttons are display-only; the assessment does not require routing or backend features.
