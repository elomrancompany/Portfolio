# شركة العمران للمقاولات العامة
## EL OMRAN General Contracting — Premium Portfolio Website

---

## 🚀 DEPLOYMENT GUIDE (GitHub → Vercel)

### STEP 1 — Install dependencies locally
```bash
cd elomran
npm install
npm run dev
# Open http://localhost:3000
```

### STEP 2 — Push to GitHub
```bash
git init
git add .
git commit -m "feat: EL OMRAN premium portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/elomran-website.git
git push -u origin main
```

### STEP 3 — Deploy to Vercel (2 minutes)
1. Go to **https://vercel.com** → Sign up with GitHub
2. Click **"Add New Project"**
3. Import your `elomran-website` repository
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site is live at `elomran-website.vercel.app` ✅

### STEP 4 — Custom Domain (optional)
- In Vercel dashboard → Settings → Domains
- Add `www.elomraneg.com`
- Update your DNS: add a CNAME pointing to `cname.vercel-dns.com`

---

## 📸 REAL PHOTOS PROMPT
### Send this EXACTLY to Claude (claude.ai) or ChatGPT to get real portfolio photos:

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

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#071B2A` | Primary background |
| Gold | `#C9A15A` | Accents, CTAs, highlights |
| Graphite | `#1C1F26` | Section alternates |
| Soft White | `#F6F7F9` | Primary text |
| Concrete | `#B9BEC7` | Secondary text |

---

## 📞 SUPPORT

For any changes to this website, send the full prompt at the top of this file to Claude at **claude.ai** with your specific change requests.

Built with Next.js 14 + TailwindCSS + TypeScript
#   P o r t f o l i o  
 #   P o r t f o l i o  
 