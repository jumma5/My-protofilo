

# Jumma Karem — Premium Portfolio Website

## Overview
A single-page dark portfolio with glassmorphic design, advanced animations, and interactive project panels. Built with React + Vite + Tailwind CSS (no Next.js — using React Router instead).

---

## 1. Global Elements

### Sticky Glassmorphic Navbar
- Fixed top bar with `backdrop-blur-xl` and subtle border
- Links: **Home**, **Work**, **Tech Stack**, **Education**
- Active section indicator via scroll spy (intersection observer)
- Smooth scroll navigation

### Scroll Progress Bar
- Thin animated progress bar at the very top of the page showing scroll position

### Custom Reactive Cursor
- Circle-follower cursor effect that trails the mouse with smooth interpolation
- Scales up on hover over interactive elements

---

## 2. Hero Section — Animated Title
- Background: `#0A0A0A` dark charcoal
- **"JUMMA KAREM"** — bold, oversized heading with:
  - **Staggered Reveal**: Each letter slides up and fades in sequentially on page load
  - **Metallic Shimmer**: A gradient overlay that sweeps across the text on hover
- Subtitle: "Front-End Developer | AI-Augmented Software Engineer" with fade-in
- Animated bouncing chevron at the bottom to guide scrolling
- Full viewport height, centered layout

---

## 3. Selected Works — Asymmetrical Grid + Slide-over Panel

### Project Grid
- Asymmetrical masonry-style layout
- Projects: **Modern E-commerce Platform**, **Weather Dashboard** (and more)
- Cards with hover scale + glow effect, showing title and brief tag

### Slide-over Detail Panel (Drawer from Right)
When a project card is clicked, a professional panel slides in:
- **Glassmorphic styling**: `backdrop-blur-xl`, 1px subtle border, semi-transparent background
- **Parallax header image** at the top of the panel
- **Tech stack badges** (e.g., Next.js, TypeScript, Tailwind) with subtle glow effects
- **Project description** with key features
- **"AI-Workflow" section**: Explains how AI tools (Cursor, v0.dev) were used to optimize this specific project — unique per project
- **Sticky footer** with "Live Demo" and "GitHub" action buttons
- Smooth slide-in/out animation
- Close button + click-outside to dismiss

---

## 4. My Stack — Interactive Icons

### Tech Grid
- Interactive icons for **React**, **Next.js**, **TypeScript**, **Tailwind CSS**, **JavaScript**, etc.
- Hover effects: scale up + soft glow
- Tooltip or label on hover showing proficiency or usage context

### AI-Assisted Development Highlight
- Special subsection with distinct **gradient-border cards** for:
  - **Cursor**, **v0.dev**, **Google AI Studio**
- Visual distinction (e.g., animated gradient border, special badge) to set these apart from standard tools

---

## 5. Education / Credibility Section
- Minimalist testimonial-style card:
  - **"3rd-year Informatics Engineering student at SVU"**
- Clean layout with subtle glassmorphic card styling
- Optional: graduation cap icon or university branding accent

---

## 6. Visual Design System
- **Background**: Dark charcoal `#0A0A0A`
- **Text**: Slate grey for body, white for headings
- **Accents**: Glassmorphic cards with `backdrop-blur`, subtle borders
- **Animations**: Framer Motion for all transitions — fade-ins, staggered reveals, hover effects
- **Scroll-triggered animations**: Sections fade/slide in as they enter viewport

---

## Technical Notes
- Will install `framer-motion` for advanced animations
- Single-page with scroll-based navigation (no route changes)
- All project data stored as local constants (no backend needed)
- Responsive design for mobile and desktop

