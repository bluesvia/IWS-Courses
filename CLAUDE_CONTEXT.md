# IWS Online School - Project Context

## Project Overview
This project is an online learning platform (LMS) frontend for "IWS Online School" (specifically for IGCSE Mathematics currently). It emphasizes a premium, clean, and highly focused user experience to encourage course enrollments and facilitate learning. The tone is professional, "Cambridge-esque", and target-driven.

## Tech Stack
- **Framework**: React 18+ with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom brand color variables defined in index.css)
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React

## Core Architecture & Routing
The application is a standard Client-Side SPA (Single Page Application).

**Routes (`src/App.tsx`):**
- `/` - Home Page: Premium landing page with a dark-themed hero section tailored to drive conversions.
- `/course/math` - Course Details: Specific sales page for the "Foundation IGCSE Mathematics" course.
- `/checkout` - Checkout: Secure, simple form for user details and payment intent.
- `/thank-you` - Post-Purchase: Onboarding instructions and next steps.
- `/dashboard` - Student Dashboard: LMS interface where students view their progress and access course modules.
- `/privacy`, `/terms`, `/sales-agreement` - Legal pages.

## Key Design & UI Decisions
1. **Color Palette**: 
   - Primary Brand: A professional Blue/Slate palette (`#1b3a53` to `#f0f4f8`).
   - Dark Theme (Hero): Uses deep `#0a0a0a` background with subtle indigo/brand gradients to create a premium, modern aesthetic similar to top-tier design courses.
2. **Typography**: 
   - Sans-serif `Inter` for standard UI elements.
   - Display font `Space Grotesk` used for headings.
3. **Components**:
   - Uses rounded corners for buttons (`rounded-lg`) instead of fully pill-shaped (`rounded-full`), aligning with the requested slightly-rounded/refined look.
   - Heavy use of glassmorphism (backdrop-blur) and subtle borders (`border-white/10`) in the dark sections.

## Directory Structure
```
/
├── public/                 # Static assets (IWS_Logo.png)
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.tsx  # Sticky header with navigation and CTA routes
│   │       └── Footer.tsx  # Global footer with links
│   ├── lib/
│   │   ├── tracking.ts     # Mock analytics/event tracking
│   │   └── utils.ts        # cn() utility for Tailwind classes
│   ├── pages/
│   │   ├── Home.tsx        # Feature-rich landing page with custom grid card UI
│   │   ├── Course.tsx      # Landing page for specific course
│   │   ├── Dashboard.tsx   # Authenticated student view
│   │   ├── Checkout.tsx    # Purchase form
│   │   ├── ThankYou.tsx    # Success page
│   │   ├── Privacy.tsx     # Legal
│   │   ├── Terms.tsx       # Legal
│   │   └── SalesAgreement.tsx # Legal
│   ├── App.tsx             # Route definitions
│   ├── main.tsx            # React mount point
│   └── index.css           # Global CSS and Tailwind directives
├── package.json
├── tailwind.config.js      # (Implicit via Vite/Tailwind v4 integration context)
└── vite.config.ts
```

## Current Status & Next Steps
- The core pages, routing, and overall UI foundation are established.
- The Home page hero section was recently redesigned to match a highly premium, dark-mode aesthetic with student image cards and brand trust indicators (Cambridge, Pearson, Stripe).
- **To-Do**: 
  - Integrate real payment gateway (e.g., Stripe) in `/checkout`.
  - Connect to a backend database (e.g., Firebase or Supabase) for user authentication and dynamic course progress tracking in `/dashboard`.
  - Populate actual curriculum data and video players into the course viewing experience.
