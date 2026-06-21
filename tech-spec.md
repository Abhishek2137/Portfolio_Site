# Tech Spec — Abhishek Raut Portfolio

## Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| next | ^15 | Framework, App Router, next/font, next/image |
| react | ^19 | UI framework |
| react-dom | ^19 | React DOM renderer |
| framer-motion | ^12 | Component animations, viewport triggers, gesture animations, AnimatePresence |
| lenis | ^1 | Smooth scroll with inertia |
| lucide-react | ^0.460 | Icon library (all UI icons) |

### Dev

| Package | Version | Purpose |
|---|---|---|
| typescript | ^5 | Type safety |
| @types/react | ^19 | React type definitions |
| @types/node | ^22 | Node type definitions |
| tailwindcss | ^4 | Utility-first styling |
| @tailwindcss/postcss | ^4 | PostCSS integration for Tailwind v4 |

---

## Component Inventory

### Layout

| Component | Source | Reuse |
|---|---|---|
| NavigationBar | Custom | Single instance, fixed bottom, scrollspy active state via IntersectionObserver |
| Footer | Custom | Single instance |

### Sections

| Component | Source | Notes |
|---|---|---|
| HeroSection | Custom | Full-viewport, glass container, portrait with CSS glow |
| AboutSection | Custom | Two-column: text + 2x2 stat grid |
| TechStackSection | Custom | 6 category rows of SkillIconCard |
| ProjectsSection | Custom | 3-column card grid |
| ExperienceSection | Custom | Vertical timeline with alternating layout |
| CertificationsSection | Custom | 3-column card grid (5 cards) |
| ContactSection | Custom | Centered form + social links |

### Reusable Components

| Component | Source | Used By |
|---|---|---|
| SectionHeading | Custom | About, TechStack, Projects, Experience, Certifications, Contact |
| GlassCard | Custom | About (stat cards), Projects (project cards), Experience (responsibility cards), Certifications (cert cards), Contact (form container) |
| SkillIconCard | Custom | TechStackSection (6 categories × multiple skills) |
| CustomCursor | Custom | Global (desktop only) |

### Hooks

| Hook | Purpose |
|---|---|
| useLenis | Initialize Lenis instance, expose scroll-to for nav clicks |
| useActiveSection | IntersectionObserver tracking most-visible section for nav highlight |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|---|---|---|---|
| Page load sequence (staggered 7-step) | Framer Motion | Parent `motion.div` with orchestrated `staggerChildren` variant, children use `initial/animate` | Medium |
| Section entrance (heading + cards) | Framer Motion | `whileInView` with `viewport={{ once: true, amount: 0.15 }}` on each section's container | Low |
| Hero glow pulse | CSS keyframes | `@keyframes glowPulse` on a pseudo-element, `animation: glowPulse 4s ease-in-out infinite` | Low |
| Glow mouse parallax | Custom hook | `mousemove` → `requestAnimationFrame` → `transform: translate(x*0.02, y*0.02)` on glow element | Low |
| Nav slide-up entrance | Framer Motion | `motion.nav` with `initial={{ y: 30, opacity: 0 }}` `animate={{ y: 0, opacity: 1 }}`, pill items use `staggerChildren` | Low |
| Nav scrollspy active transition | Framer Motion | `AnimatePresence` + `motion.button` layout animation for active pill background transition | Medium |
| Card hover (translateY + glow) | CSS transitions | Tailwind `transition-all` with hover utilities; Glow variant adds `border-color` and `box-shadow` changes | Low |
| Skill card hover (scale + icon color) | CSS transitions | `group-hover` Tailwind utilities for icon color shift and scale | Low |
| Timeline line draw | Framer Motion | `motion.div` with `scaleY` from 0→1, `originY: 0`, triggered by `whileInView` | Low |
| Timeline dot pop | Framer Motion | `motion.div` with `scale: 0→1`, `ease-back-out` easing | Low |
| Custom cursor | Custom hook + RAF | `useEffect` with `mousemove` listener, lerp-based position interpolation via `requestAnimationFrame`, size toggle on interactive element hover detection | Medium |
| Smooth scroll | Lenis | Initialize at app root, `lerp: 0.1`, `smoothWheel: true`. Expose instance via React context for scroll-to calls | Low |
| Status dot pulse | CSS keyframes | `@keyframes pulse { scale 1→1.2→1 }` 2s infinite | Low |
| Project image hover zoom | CSS transitions | `overflow: hidden` container + `group-hover:scale-103` on image | Low |

---

## State & Logic

**Active section tracking** — A single `useActiveSection` hook creates one IntersectionObserver that watches all section refs. It reports the most-visible section ID. NavigationBar reads this for active pill highlighting. No per-section observer duplication.

**Lenis instance sharing** — Lenis is initialized once in the root layout and stored in a React context. NavigationBar and any anchor-link components consume this context to call `lenis.scrollTo()`. This avoids multiple Lenis instances.

**Custom cursor gate** — The cursor component renders nothing and attaches no listeners until `window.matchMedia('(pointer: fine)')` returns true. This prevents touch-device overhead and visual bugs.

**Glassmorphism fallback** — Detect `backdrop-filter` support via CSS `@supports` or a one-time JS check. Unsupported browsers get opaque dark backgrounds instead of frosted glass.

---

## Other Key Decisions

**No shadcn/ui** — This is a fully custom design with no standard UI primitives (no forms, dialogs, tables, dropdowns). Every component has bespoke glassmorphism styling. Adding shadcn would require overriding every default, providing no value.

**No Three.js / WebGL** — The hero glow is a CSS radial-gradient with CSS animation. No 3D scenes, no particle systems, no canvas effects. This keeps the bundle small and the site fast.

**next/font for typography** — Load Inter and JetBrains Mono via `next/font/google` with `display: 'swap'`. No external font CDN requests.

**Image strategy** — Hero portrait uses Next.js `<Image priority>` for LCP. All other images (project cards) use lazy loading. All images are served as optimized formats via Next.js Image component.
