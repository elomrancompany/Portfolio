# شركة العمران للمقاولات العامة

## EL OMRAN General Contracting — Premium Portfolio Website v2.0

> **Production-Ready • 5-Year Stability • Mobile-First • 3D Enhanced**

---

## ✨ What's New in v2.0

### 🎨 Enhanced UI/UX

- ✅ **3D Particle Effects** - Animated background with Three.js
- ✅ **3D Card Animations** - Mouse-tracking 3D hover effects
- ✅ **Responsive Typography** - Dynamic scaling with CSS clamp()
- ✅ **Modern Glass Design** - Frosted glass card effects
- ✅ **Enhanced Animations** - Smooth scroll & transition effects

### 📱 Full Responsive Design

- ✅ Mobile-first approach
- ✅ Optimized for all screen sizes (320px - 2560px)
- ✅ Touch-friendly interactions
- ✅ Safe area support for notched devices
- ✅ 44px+ touch targets

### 🛡️ Production Stability

- ✅ TypeScript strict mode
- ✅ Error boundary with fallback UI
- ✅ Performance optimization utilities
- ✅ Security headers & CORS protection
- ✅ Accessibility (WCAG 2.1 AA)

---

## 🚀 Quick Start

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Install 3D library (included in dependencies)
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Local Development

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm start          # Run production build
npm run lint       # Check code quality
```

---

## 🌐 Deployment

### Deploy to Vercel (Easiest)

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to https://vercel.com
# 3. Import repository
# 4. Auto-deploy on every push ✅

# Custom domain in Vercel dashboard
```

### Deploy Self-Hosted

```bash
# Build
npm run build

# Start server
npm start

# Or use PM2 for background process
pm2 start "npm start" --name "elomran"
```

### Docker Deployment

```bash
# Build image
docker build -t elomran-portfolio .

# Run container
docker run -p 3000:3000 elomran-portfolio

# Deploy with docker-compose
docker-compose up -d
```

**For detailed deployment guide, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

---

## 📊 Tech Stack

| Layer           | Technology           | Version |
| --------------- | -------------------- | ------- |
| **Framework**   | Next.js              | 14.2.5  |
| **Runtime**     | React                | 18.x    |
| **Styling**     | Tailwind CSS         | 3.4.6   |
| **3D Graphics** | Three.js             | r128    |
| **Animations**  | GSAP + Framer Motion | 11.x    |
| **Language**    | TypeScript           | 5.x     |
| **Icons**       | Lucide React         | 0.400   |
| **Deployment**  | Vercel               | Latest  |

---

## 📁 Project Structure

```
elomran/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, SEO metadata
│   │   └── page.tsx                # Main page composition
│   ├── components/
│   │   ├── 3d/                     # 3D Components ⭐ NEW
│   │   │   ├── Scene3D.tsx         # Particle effect background
│   │   │   ├── Card3D.tsx          # 3D hover cards
│   │   │   └── Orb3D.tsx           # Rotating orb effect
│   │   ├── sections/               # Page sections
│   │   │   ├── Navbar.tsx          # Sticky navigation
│   │   │   ├── Hero.tsx            # Hero section (3D enabled)
│   │   │   ├── Partners.tsx        # Partner logos
│   │   │   ├── About.tsx           # Company story
│   │   │   ├── Numbers.tsx         # Animated stats
│   │   │   ├── Services.tsx        # Service cards (3D enabled)
│   │   │   ├── Projects.tsx        # Project showcase
│   │   │   ├── WhyUs.tsx           # Company advantages
│   │   │   ├── Process.tsx         # Workflow steps
│   │   │   ├── Quality.tsx         # Quality assurance
│   │   │   ├── Contact.tsx         # Contact form
│   │   │   └── Footer.tsx          # Footer (responsive)
│   │   ├── ui/
│   │   │   ├── Logo.tsx            # Logo component
│   │   │   └── WhatsAppFloat.tsx   # Floating WhatsApp button
│   │   ├── ErrorBoundary.tsx       # Error handling ⭐ NEW
│   │   └── ResponsiveContainer.tsx # Responsive wrapper ⭐ NEW
│   ├── lib/
│   │   ├── data.ts                 # All content/configuration
│   │   └── performance.ts          # Performance utilities ⭐ NEW
│   └── styles/
│       └── globals.css             # Design tokens & animations (enhanced)
├── public/
│   ├── images/                     # Your project images
│   └── fonts/                      # Font files
├── package.json                    # Dependencies
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── next.config.js                  # Next.js configuration (enhanced)
├── DEPLOYMENT_GUIDE.md             # Detailed deployment guide ⭐ NEW
├── 3D_COMPONENTS.md                # 3D docs ⭐ NEW
└── README.md                       # This file
```

---

## 🎨 3D Components Guide

### Scene3D - Particle Background

```tsx
import Scene3D from "@/components/3d/Scene3D";

<Scene3D className="absolute inset-0" />;
```

Creates animated particle cloud effect. Automatically disables on mobile.

### Card3D - 3D Hover Cards

```tsx
import Card3D from "@/components/3d/Card3D";

<Card3D intensity={15}>
  <div>Your content</div>
</Card3D>;
```

Cards rotate based on mouse position. Intensity: 0-30.

### Orb3D - Rotating Sphere

```tsx
import Orb3D from "@/components/3d/Orb3D";

<Orb3D size={400} color="#c9a15a" />;
```

Geometric orb with lighting and rotation.

**📖 Full Documentation**: See [3D_COMPONENTS.md](./3D_COMPONENTS.md)

---

## 📱 Responsive Breakpoints

```
Mobile:    320px - 639px   (sm breakpoint: 640px)
Tablet:    640px - 1023px  (md breakpoint: 768px)
Desktop:   1024px - 1279px (lg breakpoint: 1024px)
Large:     1280px - 1535px (xl breakpoint: 1280px)
XL:        1536px+         (2xl breakpoint: 1536px)
```

### Mobile-First Utilities

```tsx
// Responsive text sizes
<h1 className="text-[clamp(28px,6vw,72px)]">Responsive Text</h1>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">Content</div>

// Show/hide based on screen size
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

---

## ⚙️ Performance Optimization

### Automatic Optimizations

The app automatically:

- 🎯 Disables 3D effects on low-performance devices
- 🎯 Detects slow network and loads lighter assets
- 🯇 Respects user's motion preferences (`prefers-reduced-motion`)
- 🯇 Caches images for 1 year
- 🯇 Provides WebGL fallback
- 🯇 Lazy-loads components

### Performance Check

```typescript
import performanceUtils from "@/lib/performance";

if (performanceUtils.isLowPerformanceDevice()) {
  // Disable 3D effects
}

if (!performanceUtils.isWebGLSupported()) {
  // Use fallback UI
}
```

### Build Size

```bash
npm run build
# Check next-stats.json for bundle analysis
```

---

## ✏️ Content Editing

**All content is in one file:** `src/lib/data.ts`

Edit these objects:

- `SITE` - Company info (phone, email, address)
- `STATS` - Animated statistics
- `SERVICES` - 6 services with images & descriptions
- `PROJECTS` - 3 featured projects
- `WHY_US` - 6 company advantages
- `PROCESS` - 5-step workflow
- `NAV_LINKS` - Navigation menu

### Example: Add a new service

```typescript
// src/lib/data.ts
export const SERVICES = [
  {
    id: "01",
    name: "Your Service Name",
    desc: "Service description",
    image: "https://images.unsplash.com/photo-...",
  },
  // ... more services
];
```

---

## 🔒 Security

### Security Features

- ✅ CSP (Content Security Policy) headers
- ✅ X-Frame-Options protection
- ✅ XSS protection headers
- ✅ HTTPS enforced
- ✅ Input sanitization
- ✅ CORS configured

### Environment Variables

```bash
# .env.local (never commit this!)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## 🧪 Testing

### Build & Test Locally

```bash
npm run build
npm start
# Visit http://localhost:3000
```

### Lighthouse Check

```bash
# Use Chrome DevTools → Lighthouse
# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 90+
# - SEO: 100
```

### Mobile Testing

```bash
# Use Chrome DevTools → Device toolbar
# Test on: iPhone 12, Samsung S21, iPad Pro
```

---

## 🚨 Troubleshooting

### 3D Not Rendering

```typescript
// Check WebGL support
if (!performanceUtils.isWebGLSupported()) {
  console.log("WebGL not supported");
}
```

### Build Fails

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Performance Issues

```bash
# Analyze bundle
npm install -D webpack-bundle-analyzer
npm run build
```

---

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Detailed deployment & maintenance
- **[3D_COMPONENTS.md](./3D_COMPONENTS.md)** - 3D components documentation
- **[Next.js Docs](https://nextjs.org/docs)**
- **[React Docs](https://react.dev)**
- **[Tailwind CSS](https://tailwindcss.com)**
- **[Three.js](https://threejs.org)**

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: description"`
3. Push to branch: `git push origin feature/your-feature`
4. Submit pull request

---

## 📝 License

© 2025 EL OMRAN General Contracting. All rights reserved.

---

## 📞 Support

For deployment issues, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
For 3D customization, see [3D_COMPONENTS.md](./3D_COMPONENTS.md)

---

## 🎯 Version History

### v2.0 (Current) - May 2026

- ✨ 3D UI/UX enhancements
- 📱 Full responsive redesign
- 🛡️ Stability improvements
- 🔧 Production optimizations

### v1.0

- Initial portfolio launch
- Basic responsive design
- GSAP animations

---

**Last Updated**: May 2026  
**Stability Guarantee**: 5+ years with regular maintenance  
**Browser Support**: All modern browsers (Chrome 90+, Firefox 88+, Safari 15+, Edge 90+)

---

### ═══════════════════════════════════════════════

### MASTER PROMPT — COPY AND SEND AS-IS

### ═══════════════════════════════════════════════

```
I need you to help me find and replace all placeholder/stock images in my EL OMRAN General Contracting website with the most realistic, high-quality, professional construction portfolio images available.

## COMPANY CONTEXT
EL OMRAN General Contracting is an Egyptian premium construction company specializing in:
- National infrastructure projects (Mustaqbal Masr - 400,000 feddan agricultural reclamation)
- Civil works & reinforced concrete foundations (180+ concrete bases)
- Water lifting stations & electrical stations
- Excavation, filling, water/sewage networks
- North Coast residential & commercial construction
- Commercial mall construction

## WHAT I NEED
For each section of my website, give me the BEST Unsplash URLs (free, no attribution needed) that look like REAL Egyptian/Gulf construction project portfolio photos.

Replace each image with the most realistic alternative. Format your response as a JSON object I can copy-paste to replace my image URLs.

## SECTIONS THAT NEED IMAGES

### 1. HERO BACKGROUND
- Needs: Massive construction site at golden hour/sunset, cranes, concrete, cinematic wide shot
- Mood: Epic, powerful, national-scale project
- Best search terms: "construction site aerial sunset drone", "mega project infrastructure aerial"

### 2. ABOUT SECTION
- Needs: Construction workers, engineers on site, hard hats, professional site visit
- Mood: Field expertise, professional, trustworthy
- Best search terms: "construction engineer site inspection", "civil engineer field work Egypt"

### 3. QUALITY SECTION
- Needs: Safety equipment, quality control inspection, professional HSE
- Mood: ISO-standard, corporate safety, precision
- Best search terms: "construction safety inspection", "engineering quality control site"

### 4. SERVICE IMAGES (6 images needed):
1. Infrastructure/site works → aerial construction infrastructure shot
2. Water stations → industrial pumping station, pipes, water infrastructure
3. Reinforced concrete → concrete pouring, rebar, foundation work
4. Excavation → excavator machinery, earth moving, construction equipment
5. Water networks → underground pipe laying, sewage network construction
6. Agricultural reclamation → aerial farmland, irrigation canals, desert reclamation Egypt

### 5. PROJECT IMAGES (3 images needed):
1. Mustaqbal Masr → Egyptian desert agricultural project, irrigation, farmland aerial
2. North Coast → Mediterranean coast construction, beach real estate construction
3. Commercial Mall → commercial building construction, steel structure, modern building site

## RESPONSE FORMAT
Return ONLY this JSON (no explanation):
{
  "hero": "https://images.unsplash.com/photo-XXXXXXXXXX?w=1920&q=85",
  "about": "https://images.unsplash.com/photo-XXXXXXXXXX?w=900&q=85",
  "quality": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=85",
  "services": {
    "infrastructure": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80",
    "water_stations": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80",
    "concrete": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80",
    "excavation": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80",
    "networks": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80",
    "agriculture": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80"
  },
  "projects": {
    "mustaqbal_masr": "https://images.unsplash.com/photo-XXXXXXXXXX?w=1200&q=85",
    "north_coast": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=85",
    "commercial_mall": "https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=85"
  }
}

Make every single image look like it came from a real Egyptian/Gulf premium construction company's actual project portfolio. Prioritize images that feel authentic, massive scale, professional, and cinematic.
```

### ═══════════════════════════════════════════════

### END OF MASTER PROMPT

### ═══════════════════════════════════════════════

---

## HOW TO APPLY THE NEW IMAGES

After you get the JSON response from Claude/ChatGPT:

### Option A — Quick Replace in data.ts

Open `src/lib/data.ts` and replace the `image:` fields in `SERVICES` and `PROJECTS` arrays with the new URLs.

### Option B — Replace in component files directly

- Hero image → `src/components/sections/Hero.tsx` (line with `backgroundImage`)
- About image → `src/components/sections/About.tsx`
- Quality image → `src/components/sections/Quality.tsx`
- Services → `src/lib/data.ts` → SERVICES array
- Projects → `src/lib/data.ts` → PROJECTS array

### Option C — Use environment variables (best for production)

Create `.env.local`:

```env
NEXT_PUBLIC_HERO_IMAGE=https://images.unsplash.com/photo-YOUR_ID?w=1920&q=85
NEXT_PUBLIC_ABOUT_IMAGE=https://images.unsplash.com/photo-YOUR_ID?w=900&q=85
```

---

## 📁 PROJECT STRUCTURE

```
elomran/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← SEO metadata, fonts
│   │   └── page.tsx            ← Main page assembly
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx      ← Sticky nav, mobile menu
│   │   │   ├── Hero.tsx        ← Full-screen cinematic hero
│   │   │   ├── Partners.tsx    ← Concord + Al Saud
│   │   │   ├── About.tsx       ← Company story + values
│   │   │   ├── Numbers.tsx     ← Animated stats
│   │   │   ├── Services.tsx    ← 6 service cards
│   │   │   ├── Projects.tsx    ← Asymmetric project grid
│   │   │   ├── WhyUs.tsx       ← 6 feature blocks
│   │   │   ├── Process.tsx     ← 5-step timeline
│   │   │   ├── Quality.tsx     ← HSE section
│   │   │   ├── Contact.tsx     ← WhatsApp form
│   │   │   └── Footer.tsx      ← 4-col footer
│   │   └── ui/
│   │       ├── Logo.tsx        ← SVG logo component
│   │       └── WhatsAppFloat.tsx ← Floating WA button
│   ├── lib/
│   │   └── data.ts             ← ALL content/data (edit here)
│   └── styles/
│       └── globals.css         ← Design tokens + animations
├── public/
│   └── images/                 ← Put your real photos here
├── package.json
├── tailwind.config.ts
├── next.config.js
├── vercel.json
└── .gitignore
```

---

## ✏️ HOW TO EDIT CONTENT

**ALL company content is in one file:** `src/lib/data.ts`

Edit these exports:

- `SITE` → phone, email, address, WhatsApp number
- `STATS` → the 5 key metrics
- `SERVICES` → 6 services with names, descriptions, images
- `PROJECTS` → 3 projects with names, clients, metrics, images
- `WHY_US` → 6 reasons with icons and descriptions
- `PROCESS` → 5 workflow steps
- `NAV_LINKS` → navigation menu items

---

## 🎨 BRAND COLORS (already configured)

| Name       | Hex       | Usage                     |
| ---------- | --------- | ------------------------- |
| Navy       | `#071B2A` | Primary background        |
| Gold       | `#C9A15A` | Accents, CTAs, highlights |
| Graphite   | `#1C1F26` | Section alternates        |
| Soft White | `#F6F7F9` | Primary text              |
| Concrete   | `#B9BEC7` | Secondary text            |

---

## 📞 SUPPORT

For any changes to this website, send the full prompt at the top of this file to Claude at **claude.ai** with your specific change requests.

Built with Next.js 14 + TailwindCSS + TypeScript
#   P o r t f o l i o 
 
 #   P o r t f o l i o 
 
 
