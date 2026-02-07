

--- FILE START: DEPLOYMENT.md ---

# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to various platforms.

## Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Test the production build locally (`npm run preview`)
- [ ] Verify all links work correctly
- [ ] Check responsive design on multiple devices
- [ ] Test contact form functionality
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Verify no console errors or warnings
- [ ] Update personal information (email, social links, etc.)
- [ ] Add custom favicon (replace `/public/vite.svg`)
- [ ] Create Open Graph image (`og-image.png`) for social media previews
- [ ] Update meta tags in `index.html` with your domain

## Platform-Specific Deployment

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic builds and previews.

**Steps:**

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure (if needed)**

   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Get a free `.vercel.app` domain

**Custom Domain:**

- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

Netlify provides similar features to Vercel with drag-and-drop deployment option.

**Method A: Git Integration**

1. **Push to GitHub** (same as Vercel)

2. **Import to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

**Method B: Manual Deploy**

1. **Build locally**

   ```bash
   npm run build
   ```

2. **Drag and Drop**
   - Go to Netlify dashboard
   - Drag the `dist` folder to the deploy zone
   - Site goes live immediately

**Custom Domain:**

- Go to Site Settings → Domain management
- Add custom domain and configure DNS

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

**Setup:**

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these lines:

   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   Add base path:

   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: "/portfolio/", // Your repo name
   });
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

**Custom Domain:**

- Add `CNAME` file in `public/` folder with your domain
- Configure DNS with your domain provider

---

### 4. Cloudflare Pages

Fast global CDN with generous free tier.

**Steps:**

1. **Push to GitHub**

2. **Create Cloudflare Pages Project**

   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect to GitHub

3. **Configure Build**

   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Deploy**
   - Click "Save and Deploy"
   - Get a free `.pages.dev` domain

---

## Environment Variables

If you add environment variables later:

**Vercel:**

- Project Settings → Environment Variables
- Add variables and redeploy

**Netlify:**

- Site Settings → Build & deploy → Environment
- Add variables and trigger new deploy

**GitHub Pages:**

- Use GitHub Secrets for sensitive data
- Access via GitHub Actions workflow

---

## Post-Deployment Verification

After deployment, verify:

1. **Functionality**

   - [ ] All sections load correctly
   - [ ] Navigation works (including mobile menu)
   - [ ] Contact form opens email client
   - [ ] All external links open in new tabs
   - [ ] Images load properly

2. **Performance**

   - [ ] Run Lighthouse audit on live site
   - [ ] Check page load time (< 3 seconds)
   - [ ] Verify animations are smooth

3. **SEO**

   - [ ] Test social media preview:
     - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
     - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)
   - [ ] Verify Google can crawl your site
   - [ ] Submit sitemap to Google Search Console

4. **Cross-Browser Testing**

   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

5. **Mobile Testing**
   - [ ] iOS Safari
   - [ ] Android Chrome
   - [ ] Test various screen sizes

---

## Continuous Deployment

Once set up, your site will auto-deploy on every push to main branch:

```bash
# Make changes
git add .
git commit -m "Update project section"
git push origin main

# Platform automatically:
# 1. Detects the push
# 2. Runs build
# 3. Deploys new version
# 4. Sends notification
```

---

## Troubleshooting

### Build Fails

**Check:**

- Node version matches local environment
- All dependencies in `package.json`
- No hardcoded localhost URLs
- Environment variables are set

**Solution:**

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Routes

**For SPAs on GitHub Pages:**

- Add `404.html` that redirects to `index.html`

**For Netlify:**

- Add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

### Images Not Loading

**Check:**

- Images are in `public/` or imported in components
- Paths are relative, not absolute
- Base path is configured correctly (for GitHub Pages)

---

## Custom Domain Setup

### DNS Configuration

**For Vercel/Netlify:**

1. Add A record: `@` → Platform IP
2. Add CNAME: `www` → `your-site.platform.app`

**For GitHub Pages:**

1. Add A records pointing to GitHub IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add CNAME: `www` → `yourusername.github.io`

### SSL Certificate

All platforms provide free SSL certificates:

- **Vercel/Netlify**: Automatic via Let's Encrypt
- **GitHub Pages**: Enable in repository settings
- **Cloudflare**: Automatic with Full SSL mode

---

## Monitoring

### Analytics

Add analytics to track visitors:

**Google Analytics:**

```html
<!-- Add to index.html <head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
```

**Vercel Analytics:**

- Enable in project settings (free tier available)

**Netlify Analytics:**

- Enable in site settings ($9/month)

### Uptime Monitoring

Free options:

- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup

- Keep code in GitHub (automatic backup)
- Export analytics data periodically
- Save deployment configurations

---

## Support

If you encounter issues:

1. Check platform status pages
2. Review build logs
3. Search platform documentation
4. Ask in platform community forums

**Platform Support:**

- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [answers.netlify.com](https://answers.netlify.com)
- GitHub: [github.community](https://github.community)

---

**Happy Deploying! 🚀**


--- FILE END ---


--- FILE START: eslint.config.js ---

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);


--- FILE END ---


--- FILE START: index.html ---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Rudrankur Indurkar | Full-Stack Developer Portfolio</title>
    <meta name="title" content="Rudrankur Indurkar | Full-Stack Developer Portfolio" />
    <meta name="description" content="Full-Stack Developer specializing in Flutter, Spring Boot, and modern web technologies. Building exceptional mobile and web applications with 2+ years of experience." />
    <meta name="keywords" content="Full-Stack Developer, Flutter Developer, Spring Boot, Mobile App Development, Web Development, React, JavaScript, Portfolio, Rudrankur Indurkar" />
    <meta name="author" content="Rudrankur Indurkar" />
    <meta name="theme-color" content="#f59e0b" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rudrankurindurkar.com/" />
    <meta property="og:title" content="Rudrankur Indurkar | Full-Stack Developer Portfolio" />
    <meta property="og:description" content="Full-Stack Developer specializing in Flutter, Spring Boot, and modern web technologies. Building exceptional mobile and web applications with 2+ years of experience." />
    <meta property="og:image" content="https://rudrankurindurkar.com/og-image.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://rudrankurindurkar.com/" />
    <meta property="twitter:title" content="Rudrankur Indurkar | Full-Stack Developer Portfolio" />
    <meta property="twitter:description" content="Full-Stack Developer specializing in Flutter, Spring Boot, and modern web technologies. Building exceptional mobile and web applications with 2+ years of experience." />
    <meta property="twitter:image" content="https://rudrankurindurkar.com/og-image.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


--- FILE END ---


--- FILE START: package.json ---

{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@tailwindcss/postcss": "^4.1.17",
    "@tailwindcss/vite": "^4.1.17",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.17",
    "vite": "^7.1.7"
  }
}


--- FILE END ---


--- FILE START: postcss.config.js ---

export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}


--- FILE END ---


--- FILE START: README.md ---

# Rudrankur Indurkar - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with React, Framer Motion, and Tailwind CSS.

![Portfolio Preview](./preview.png)

## ✨ Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, minimal design with smooth animations and transitions
- **Mobile Navigation** - Animated slide-out menu with backdrop overlay
- **Dark Theme** - Elegant dark color scheme with amber accents
- **Performance Optimized** - Fast loading times and smooth 60fps animations
- **SEO Optimized** - Comprehensive meta tags for search engines and social media
- **Accessible** - WCAG compliant with ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: React Icons
- **Build Tool**: Vite 7
- **Language**: JavaScript (ES6+)

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── Hero/               # Landing section
│   │   ├── About/              # About me section
│   │   ├── Skills/             # Technical skills
│   │   ├── Experience/         # Work experience
│   │   ├── Projects/           # Featured projects
│   │   ├── Education/          # Educational background
│   │   ├── Achievements/       # Key achievements
│   │   └── Contact/            # Contact form
│   ├── assets/                 # Images and static files
│   ├── index.css               # Global styles and theme
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── public/                     # Public assets
├── index.html                  # HTML template
└── package.json                # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ShallowAwe/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #f59e0b; /* Amber */
  --color-primary-hover: #d97706;
  --color-accent: #fbbf24; /* Yellow */
  --color-background: #0f0a05; /* Very dark brown */
  --color-surface: #1c1410;
  --color-text-primary: #fffbeb; /* Warm white */
  --color-text-secondary: #a8a29e;
  --color-border: rgba(245, 158, 11, 0.15);
}
```

### Content

Update personal information in the respective section components:

- Profile image: `src/assets/profile.png`
- Contact email: `src/sections/Contact/Contact.jsx`
- Social links: `src/sections/Hero/Hero.jsx` and `src/components/Footer.jsx`
- Projects, skills, experience: Update data in respective component files

## 📦 Building for Production

1. Create a production build:

```bash
npm run build
```

2. The optimized files will be in the `dist/` folder

3. Test the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Create new site in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy: `npm run deploy`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔍 SEO

The site includes comprehensive SEO optimization:

- Meta tags for search engines
- Open Graph tags for social media
- Twitter Card support
- Semantic HTML structure
- Optimized page titles and descriptions

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- ARIA labels for screen readers
- Sufficient color contrast ratios
- Focus indicators for interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rudrankur Indurkar**

- GitHub: [@ShallowAwe](https://github.com/ShallowAwe)
- LinkedIn: [Rudrankur Indurkar](https://linkedin.com/in/rudrankur-indurkar)
- Email: rudrankurindurkar@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ Star this repo if you find it helpful!


--- FILE END ---


--- FILE START: tailwind.config.js ---

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};


--- FILE END ---


--- FILE START: tasks.txt ---

1. add a registration logic in the contact me section
2. add a Download CV button in the Hero section
3.[done] add a better theme switchee in the navbar

--- FILE END ---


--- FILE START: vite.config.js ---

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});


--- FILE END ---


--- FILE START: src\App.jsx ---

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-textPrimary font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


--- FILE END ---


--- FILE START: src\index.css ---

@import "tailwindcss";

/* -------------------------------------------------------------------------- */
/* Modern Minimal Theme — Design Tokens                                      */
/* -------------------------------------------------------------------------- */
:root {
  /* Light Mode (Warmer/Amber-ish) */
  --color-primary: #f59e0b;          /* Amber 500 */
  --color-primary-hover: #d97706;    /* Amber 600 */
  --color-accent: #fbbf24;           /* Amber 400 */
  --color-background: #fffbeb;       /* Amber 50 - Warmer background */
  --color-surface: #ffffff;          /* White */
  --color-surface-hover: #fff7ed;    /* Orange 50 */
  --color-surface-glass: rgba(255, 251, 235, 0.7); /* Warm translucent */
  --color-surface-glass-hover: rgba(255, 251, 235, 0.9);
  --color-surface-accent: rgba(245, 158, 11, 0.1);
  --color-text-primary: #451a03;     /* Amber 950 - softer than black */
  --color-text-secondary: #78350f;   /* Amber 900 */
  --color-border: rgba(148, 96, 7, 0.25);
  --color-shadow: rgba(245, 159, 11, 0.15); /* Warm shadow */
}

.dark {
  /* Dark Mode */
  --color-primary: #f59e0b;          /* Amber 500 */
  --color-primary-hover: #d97706;    /* Amber 600 */
  --color-accent: #fbbf24;           /* Amber 400 */
  --color-background: #0f0a05;       /* Very dark warm black */
  --color-surface: #1c1410;          /* Dark warm surface */
  --color-surface-hover: #2a1b15;
  --color-surface-glass: rgba(28, 20, 16, 0.5);
  --color-surface-glass-hover: rgba(28, 20, 16, 0.8);
  --color-surface-accent: rgba(255, 255, 255, 0.05);
  --color-text-primary: #fffbeb;     /* Amber 50 */
  --color-text-secondary: #d6d3d1;   /* Stone 300 */
  --color-border: rgba(245, 158, 11, 0.15);
  --color-shadow: rgba(0, 0, 0, 0.5);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans antialiased transition-colors duration-300;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    overflow-x: hidden;
  }

  ::selection {
    background-color: var(--color-primary);
    color: white;
  }
}

@layer components {
  /* Glassmorphism Utility */
  .glass-panel {
    background-color: var(--color-background); /* Fallback */
    background-color: color-mix(in srgb, var(--color-background) 80%, transparent);
    backdrop-filter: blur(12px);
    border: 1px solid var(--color-border);
    box-shadow: 0 4px 20px -2px var(--color-shadow);
  }

  .btn-primary {
    @apply px-6 py-3 font-medium rounded-lg transition-all duration-300 active:scale-95;
    background-color: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--color-primary-hover);
    /* FIXED: Uses your theme shadow instead of hardcoded blue */
    box-shadow: 0 10px 15px -3px var(--color-shadow);
  }

  .btn-secondary {
    @apply px-6 py-3 font-medium rounded-lg transition-all duration-300 active:scale-95;
    background-color: var(--color-surface-glass);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
  }

  .btn-secondary:hover {
    background-color: var(--color-surface-glass-hover);
  }

  .section-container {
    @apply max-w-7xl mx-auto px-6 py-20;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(to right, var(--color-primary), var(--color-accent));
  }
}

--- FILE END ---


--- FILE START: src\main.jsx ---

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);


--- FILE END ---


--- FILE START: src\components\Footer.jsx ---

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.png";

// Defined outside the component for better performance
const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/ShallowAwe",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/Rudrankur_Indurkar",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:rudraindurkar670@gmail.com",
    icon: FaEnvelope,
  },
];

const QUICK_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 mt-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Gradient Divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-primary), transparent)",
        }}
      />

      {/* Dynamic Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] -z-10 pointer-events-none"
        style={{
          // Uses your CSS variable so it changes color if you change the theme
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                RI<span className="text-gradient">.</span>
              </h3>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Building exceptional digital experiences with modern technologies
              and a passion for clean code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-text-primary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-primary inline-block hover:translate-x-1 transform"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-text-primary)" }}
            >
              Connect
            </h4>
            <ul className="flex items-center gap-4">
              {SOCIALS.map(({ name, url, icon: Icon }, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={url}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_-5px_var(--color-primary)]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300 group-hover:text-primary"
                      style={{ color: "var(--color-text-secondary)" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-sm tracking-wide"
            style={{ color: "var(--color-text-secondary)" }}
          >
            © {year} Rudrankur Indurkar. All Rights Reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
          >
            Built with React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


--- FILE END ---


--- FILE START: src\components\Navbar.jsx ---

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
// FIX: Import the image so the bundler handles it correctly
import profileImage from "../assets/profile.png";

// Optimization: Define static data outside the component
const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  // Optimization: Throttling scroll events is usually better,
  // but for a simple boolean toggle, this native approach is fine.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeIconVariants = {
    initial: { scale: 0.5, opacity: 0, rotate: -180 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0.5, opacity: 0, rotate: 180 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-lg border-b border-[var(--color-border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-primary)] group-hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              RI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium text-sm group"
              >
                {item.name}
                {/* Hover Underline Effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--color-surface-hover)] border border-transparent hover:border-[var(--color-border)]"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sunset"
                    variants={themeIconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="text-orange-500"
                  >
                    {/* Moon/Sunset Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    variants={themeIconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="text-amber-500"
                  >
                    {/* Sun Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-[var(--color-border)]"
            style={{
              backgroundColor: "var(--color-background)",
              // Ensures glass effect works on mobile menu too if needed
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex flex-col p-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-surface-hover)] hover:pl-6 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


--- FILE END ---


--- FILE START: src\context\ThemeContext.jsx ---

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // OPTIMIZATION: Initialize state lazily.
  // This runs once before the first render, preventing the "flash" issue.
  const [theme, setTheme] = useState(() => {
    // 1. Check if running in browser
    if (typeof window !== "undefined") {
      // 2. Check localStorage
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }
      // 3. Check System Preference (OS setting)
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    // 4. Default fallback
    return "light";
  });

  // EFFECT: Syncs the DOM class and LocalStorage whenever 'theme' state changes
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "dark" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}


--- FILE END ---


--- FILE START: src\sections\About\About.jsx ---

import React, { useState } from "react";
import { motion } from "framer-motion";
// Importing icons makes the code much cleaner
import {
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaBriefcase,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";
import profileImage from "../../assets/profile.png";

// Optimization: Static data defined outside
const STATS = [
  {
    label: "Years Experience",
    value: "1+",
    icon: FaBriefcase,
  },
  {
    label: "Projects Completed",
    value: "10+",
    icon: FaCheckCircle,
  },
  {
    label: "Technologies",
    value: "15+",
    icon: FaLayerGroup,
  },
];

const HIGHLIGHTS = [
  {
    icon: FaRocket,
    title: "Performance First",
    description:
      "Building lightning-fast applications with optimized code and best practices.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Expertise",
    description:
      "Specializing in cross-platform Flutter apps with native performance.",
  },
  {
    icon: FaCode,
    title: "Clean Design",
    description:
      "Creating intuitive user interfaces that users love to interact with.",
  },
];

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs (Dynamic Color) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Getting to Know Me
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              About <span className="text-gradient">Me</span>
            </h2>
          </motion.div>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="group relative p-8 md:p-12 rounded-3xl mb-12 overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          {/* Hover Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 96%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 96%) 100%)",
            }}
          />

          <div className="relative z-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden relative shadow-xl"
              style={{
                border: "4px solid var(--color-surface)",
                boxShadow: "0 0 20px var(--color-shadow)",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 mb-12 text-center max-w-3xl mx-auto"
            >
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                I'm a passionate{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Full-Stack Developer
                </span>{" "}
                with expertise in building scalable mobile and web applications.
                My journey in software development has been driven by a love for
                creating elegant solutions to complex problems.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                I specialize in{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Flutter
                </span>
                ,{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Spring Boot
                </span>
                , and modern web technologies, with a strong focus on
                performance optimization and user experience.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {HIGHLIGHTS.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group/highlight p-6 rounded-xl transition-all duration-300 text-center md:text-left"
                  style={{
                    backgroundColor: "var(--color-surface-glass)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 inline-block p-3 rounded-lg"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-primary), transparent 90%)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <highlight.icon size={24} />
                  </motion.div>
                  <h4
                    className="font-bold mb-2 text-lg"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {highlight.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      opacity: 0.9,
                    }}
                  >
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="group/stat relative p-8 rounded-2xl text-center transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
                }}
              />

              {/* Icon */}
              <motion.div
                animate={{
                  rotate: hoveredStat === index ? 360 : 0,
                  scale: hoveredStat === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-xl"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary), transparent 90%)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-primary)",
                }}
              >
                <stat.icon size={28} />
              </motion.div>

              {/* Value */}
              <motion.div
                className="relative z-10"
                animate={{
                  scale: hoveredStat === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold text-gradient mb-3 relative">
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.label}
                </div>
              </motion.div>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                  scaleX: 0,
                }}
                animate={{
                  scaleX: hoveredStat === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p
            className="mb-6 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Want to know more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2"
            >
              View Projects
              <FaRocket />
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Explore Skills
              <FaCode />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


--- FILE END ---


--- FILE START: src\sections\Achievements\Achievements.jsx ---

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCheckCircle,
  FaBolt,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

// --- Components & Data defined OUTSIDE to prevent re-renders ---

const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth stop (easeOutQuart)
        const ease = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(target * ease));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const ACHIEVEMENTS = [
  {
    metric: "99.8%",
    target: 99, // Integer for counter
    suffix: ".8%", // Static suffix
    label: "Transaction Success",
    description:
      "Achieved in E-Commerce application through robust error handling",
    icon: FaCheckCircle,
  },
  {
    metric: "45%",
    target: 45,
    suffix: "%",
    label: "Performance Boost",
    description: "Reduced app startup time through optimized state management",
    icon: FaBolt,
  },
  {
    metric: "500+",
    target: 500,
    suffix: "+",
    label: "Active Users",
    description: "Serving users across multiple production applications",
    icon: FaUsers,
  },
  {
    metric: "10+",
    target: 10,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully completed and deployed to production",
    icon: FaBriefcase,
  },
];

const ADDITIONAL_STATS = [
  { value: "95%", label: "Code Quality" },
  { value: "60%", label: "Faster Sync" },
  { value: "Zero", label: "Missed Deadlines" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 88%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-primary), transparent 90%)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Measurable Impact
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Quantifiable results from real-world projects
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-8 rounded-2xl text-center transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
                }}
              />

              {/* Top Corner Accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary), transparent 85%)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary), transparent 90%)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-primary)",
                  }}
                >
                  <achievement.icon size={28} />
                </motion.div>

                {/* Metric with Animated Counter */}
                <div className="mb-3 relative">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-gradient"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <AnimatedCounter
                      target={achievement.target}
                      suffix={achievement.suffix}
                      duration={2000}
                    />
                  </motion.div>

                  {/* Glow Effect Behind Number */}
                  <motion.div
                    className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                    }}
                  />
                </div>

                {/* Label */}
                <h3
                  className="text-lg font-semibold mb-3 min-h-[3.5rem] flex items-center justify-center"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {achievement.label}
                </h3>

                {/* Divider */}
                <div
                  className="h-px mb-4 mx-auto w-12 group-hover:w-full transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, var(--color-primary), transparent)",
                  }}
                />

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {achievement.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.5, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {ADDITIONAL_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group/stat"
                >
                  <div
                    className="text-3xl font-bold mb-2 group-hover/stat:text-gradient transition-all duration-300"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-6" style={{ color: "var(--color-text-secondary)" }}>
            Want to see how I achieved these results?
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-medium rounded-lg transition-all duration-300"
          >
            View Case Studies
            <FaArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}


--- FILE END ---


--- FILE START: src\sections\Contact\Contact.jsx ---

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-primary), transparent 90%)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Get in Touch
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Whether you have a project in mind or just want to say hi, my
              inbox is always open.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <ContactCard
                icon={FaEnvelope}
                title="Email"
                value="rudraindurkar670@gmail.com"
                href="mailto:rudraindurkar670@gmail.com"
                delay={0}
              />
              <ContactCard
                icon={FaLinkedin}
                title="LinkedIn"
                value="Connect on LinkedIn"
                href="https://linkedin.com/in/Rudrankur_Indurkar"
                delay={0.1}
              />
              <ContactCard
                icon={FaGithub}
                title="GitHub"
                value="Follow on GitHub"
                href="https://github.com/ShallowAwe"
                delay={0.2}
              />
              <ContactCard
                icon={FaMapMarkerAlt}
                title="Location"
                value="Aurangabad, Maharashtra"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 20px -2px var(--color-shadow)",
              }}
            >
              {/* Form Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full blur-2xl opacity-20 pointer-events-none"
                style={{ backgroundColor: "var(--color-primary)" }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <InputGroup
                  label="Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                <InputGroup
                  label="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium ml-1"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 resize-none"
                    placeholder="Tell me about your project..."
                    style={{
                      backgroundColor: "var(--color-surface-glass)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                      // dynamic styling for focus state is handled by tailwind classes usually,
                      // but inline styles for vars:
                      "--tw-ring-color": "var(--color-primary)",
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: isSubmitted
                      ? "#10b981"
                      : "var(--color-primary)",
                    color: "white",
                    boxShadow: "0 4px 15px -3px var(--color-shadow)",
                  }}
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : isSubmitted ? (
                    <>
                      Message Sent! <FaPaperPlane />
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-components for cleaner code ---

function ContactCard({ icon: Icon, title, value, href, delay }) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-primary), transparent 90%)",
          color: "var(--color-primary)",
        }}
      >
        <Icon size={20} />
      </div>
      <div>
        <h4
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {title}
        </h4>
        <p
          className="font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}

function InputGroup({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="space-y-2">
      <label
        className="text-sm font-medium ml-1"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2"
        style={{
          backgroundColor: "var(--color-surface-glass)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text-primary)",
          "--tw-ring-color": "var(--color-primary)",
        }}
      />
    </div>
  );
}


--- FILE END ---


--- FILE START: src\sections\Education\Education.jsx ---

import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

// --- Data Defined Outside Component ---
const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science",
    university: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "Aurangabad, MH",
    period: "May 2019 – Nov 2023",
    gpa: "7.97",
    maxGpa: "10.0",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Mobile Application Development",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 88%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-primary), transparent 90%)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Academic Background
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              My <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          {/* Decorative Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 rounded-full mx-auto md:mx-0 origin-left"
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-accent))",
            }}
          />
        </div>

        {/* Education Cards Mapping */}
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 96%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 96%) 100%)",
                }}
              />

              {/* Decorative Background Icon */}
              <div
                className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform rotate-12"
                style={{ color: "var(--color-primary)" }}
              >
                <FaGraduationCap size={150} />
              </div>

              {/* Content Container */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  {/* Left Side: Title & Info */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-primary), transparent 90%)",
                          color: "var(--color-primary)",
                        }}
                      >
                        <FaGraduationCap size={24} />
                      </div>
                      <h3
                        className="text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {edu.degree}
                      </h3>
                    </motion.div>

                    <div
                      className="space-y-2 pl-2 border-l-2"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div
                        className="flex items-center gap-2 pl-4"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <FaUniversity className="text-[var(--color-primary)]" />
                        <span className="font-medium">{edu.university}</span>
                      </div>
                      <div
                        className="flex items-center gap-2 pl-4 text-sm"
                        style={{
                          color: "var(--color-text-secondary)",
                          opacity: 0.8,
                        }}
                      >
                        <FaMapMarkerAlt />
                        <span>{edu.location}</span>
                        <span className="mx-2">•</span>
                        <FaCalendarAlt />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: GPA Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <div
                      className="inline-flex flex-col items-center justify-center p-4 rounded-2xl min-w-[120px]"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-primary), transparent 92%)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <FaAward
                        size={24}
                        style={{ color: "var(--color-primary)" }}
                        className="mb-2"
                      />
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-3xl font-bold"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {edu.gpa}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          / {edu.maxGpa}
                        </span>
                      </div>
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: "var(--color-primary)" }}
                      >
                        CGPA
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-6 w-full"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-border), transparent)",
                  }}
                />

                {/* Coursework Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h4
                    className="text-sm uppercase tracking-wider font-semibold mb-4 flex items-center gap-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <FaBookOpen style={{ color: "var(--color-primary)" }} />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.courses.map((course, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-default"
                        style={{
                          backgroundColor: "var(--color-surface)", // Clean surface color
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text-secondary)",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                        }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom Corner Accent */}
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary), transparent 90%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p
            className="text-sm max-w-2xl mx-auto italic"
            style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
          >
            "Education is not the filling of a pail, but the lighting of a
            fire."
          </p>
        </motion.div>
      </div>
    </section>
  );
}


--- FILE END ---


--- FILE START: src\sections\Experience\Experience.jsx ---

import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

// --- Data Defined Outside Component ---
const EXPERIENCES = [
  {
    id: 1,
    role: "Flutter / Java Developer",
    company: "Altwise",
    location: "Pune, Maharashtra",
    period: "June 2024 – Present",
    isCurrent: true,
    achievements: [
      "Developed 3 cross-platform mobile apps for 500+ active users with seamless Android & iOS compatibility.",
      "Engineered responsive UI components and micro-animations, achieving 40% faster load times.",
      "Implemented Riverpod-based state management, improving performance by 35% and reducing code complexity.",
      "Integrated Firebase real-time services and RESTful APIs, cutting sync latency by 60%.",
      "Led daily code reviews maintaining 95% code-quality standards and zero missed deadlines.",
    ],
    techStack: ["Flutter", "Dart", "Java", "Riverpod", "Firebase", "REST API"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container relative z-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-primary), transparent 90%)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-border)",
          }}
        >
          Career Journey
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Professional <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 4px 20px -2px var(--color-shadow)", // Subtle shadow
            }}
          >
            {/* Hover Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 97%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 97%) 100%)",
              }}
            />

            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--color-primary), transparent)",
              }}
            />

            {/* Content Container */}
            <div className="relative z-10">
              {/* Card Header: Role & Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div
                    className="p-3 rounded-xl mt-1 flex-shrink-0"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-primary), transparent 90%)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <FaBriefcase size={20} />
                  </div>

                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="font-medium text-lg flex items-center gap-2 mt-1"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info (Date & Location) */}
                <div className="flex flex-col items-start md:items-end gap-2 text-sm ml-14 md:ml-0">
                  <div
                    className="flex items-center gap-2 px-3 py-1 rounded-full border"
                    style={{
                      borderColor: exp.isCurrent
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                      color: exp.isCurrent
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                      backgroundColor: exp.isCurrent
                        ? "color-mix(in srgb, var(--color-primary), transparent 95%)"
                        : "transparent",
                    }}
                  >
                    <FaCalendarAlt size={12} />
                    <span className="font-semibold">{exp.period}</span>
                    {exp.isCurrent && (
                      <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                      </span>
                    )}
                  </div>
                  <div
                    className="flex items-center gap-2 px-2"
                    style={{
                      color: "var(--color-text-secondary)",
                      opacity: 0.8,
                    }}
                  >
                    <FaMapMarkerAlt size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6 w-full"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-border), transparent)",
                }}
              />

              {/* Achievements List */}
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start group/item"
                  >
                    <span
                      className="mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:text-[var(--color-primary)]"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <FaArrowRight size={10} />
                    </span>
                    <span
                      className="leading-relaxed text-sm md:text-base group-hover/item:translate-x-1 transition-transform duration-300"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-lg border transition-colors hover:border-[var(--color-primary)]"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
          style={{ backgroundColor: "var(--color-surface-glass)" }}
        >
          <FaLaptopCode style={{ color: "var(--color-primary)" }} />
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Open to new opportunities
          </p>
        </div>
      </motion.div>
    </section>
  );
}


--- FILE END ---


--- FILE START: src\sections\Hero\Hero.jsx ---

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

// --- Data Defined Outside ---
const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/ShallowAwe",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/Rudrankur_Indurkar",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:rudraindurkar670@gmail.com",
  },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pb-20 pt-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              opacity: 0.1,
            }}
          />
        </motion.div>

        {/* Top Left Orb */}
        <motion.div
          style={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            background:
              "color-mix(in srgb, var(--color-primary), transparent 85%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -left-20 w-96 h-96 rounded-full blur-[100px]"
        />

        {/* Bottom Right Orb */}
        <motion.div
          style={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
            background:
              "color-mix(in srgb, var(--color-accent), transparent 88%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        className="max-w-5xl mx-auto z-10 w-full relative"
        style={{ opacity, scale }}
      >
        <div className="space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <div
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface-glass)",
                boxShadow: "0 4px 20px -2px var(--color-shadow)",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span style={{ color: "var(--color-text-secondary)" }}>
                Available for Freelance & Full-time
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Building digital
              </motion.span>
              <motion.span
                className="text-gradient block pb-2" // pb-2 fixes gradient clipping
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                experiences
              </motion.span>
              <motion.span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                that matter.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hi, I'm{" "}
            <span
              className="font-semibold relative inline-block group cursor-pointer"
              style={{ color: "var(--color-primary)" }}
            >
              Rudrankur Indurkar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
            </span>
            . A Full-Stack Developer creating scalable, human-centered
            applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-2"
            >
              View My Work
              <FaArrowRight size={14} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-2"
            >
              Contact Me
              <FaEnvelope size={14} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  className="hover:text-[var(--color-primary)] transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
        onClick={handleScrollToAbout}
      >
        <span
          className="text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
        >
          Scroll
        </span>

        {/* Mouse Shape */}
        <div
          className="relative w-6 h-10 border-2 rounded-full flex justify-center p-1"
          style={{
            borderColor: "var(--color-text-secondary)",
            opacity: 0.6,
          }}
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--color-text-primary)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}


--- FILE END ---


--- FILE START: src\sections\Projects\Projects.jsx ---

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

// --- Data Defined Outside ---
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Mobile Application",
    category: "Mobile Development",
    icon: FaMobileAlt,
    tech: ["Flutter", "Firebase", "Razorpay", "Hive"],
    description:
      "Cross-platform shopping app featuring secure payment integration, offline-first architecture with Hive caching, and a comprehensive product catalog serving 1000+ items.",
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Success Rate", value: "99.8%" },
      { label: "Faster Boot", value: "45%" },
    ],
    links: {
      github: "https://github.com/ShallowAwe",
      live: null, // Add URL if available
    },
  },
  {
    id: 2,
    title: "Full-Stack Expense Tracker",
    category: "Backend System",
    icon: FaServer,
    tech: ["Spring Boot", "MongoDB", "OAuth2", "React"],
    description:
      "Comprehensive expense management system with OAuth2 authentication, real-time synchronization, and interactive analytics dashboard handling high-volume transaction records.",
    metrics: [
      { label: "Records", value: "10K+" },
      { label: "Latency", value: "<1s" },
      { label: "Sync", value: "Real-time" },
    ],
    links: {
      github: "https://github.com/ShallowAwe",
      live: "https://github.com/ShallowAwe", // Placeholder for demo
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Header Section */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-primary), transparent 90%)",
              color: "var(--color-primary)",
              border: "1px solid var(--color-border)",
            }}
          >
            Portfolio Showcase
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Production-ready applications demonstrating full-stack development
          expertise, from mobile interfaces to scalable backends.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ y: -10 }}
            className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 relative"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 4px 20px -2px var(--color-shadow)",
            }}
          >
            {/* Hover Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 96%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 96%) 100%)",
              }}
            />

            {/* Top Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
            />

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-10">
              {/* Title Section */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Project Icon Background */}
                <div
                  className="p-3 rounded-xl transform transition-transform duration-500 group-hover:rotate-12"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary), transparent 90%)",
                    color: "var(--color-primary)",
                  }}
                >
                  <project.icon size={24} />
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 border"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="leading-relaxed mb-8 flex-grow text-sm md:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div
                className="grid grid-cols-3 gap-4 mb-8 pt-6 relative"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center group/metric">
                    <div
                      className="text-lg md:text-xl font-bold mb-1 group-hover/metric:text-gradient transition-all duration-300"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-[10px] md:text-xs uppercase tracking-wider font-medium"
                      style={{
                        color: "var(--color-text-secondary)",
                        opacity: 0.8,
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-auto">
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  style={{
                    backgroundColor: "var(--color-surface-accent)",
                    color: "var(--color-text-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <FaGithub size={16} />
                  <span>Code</span>
                </motion.a>

                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      boxShadow: "0 4px 15px -3px var(--color-shadow)",
                    }}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={12} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p
          className="mb-4 text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Curious about the code?
        </p>
        <a
          href="https://github.com/ShallowAwe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--color-surface-glass)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-primary)",
          }}
        >
          <FaCode size={16} />
          <span>View More on GitHub</span>
          <FaArrowRight size={12} />
        </a>
      </motion.div>
    </section>
  );
}


--- FILE END ---


--- FILE START: src\sections\Skills\Skills.jsx ---

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaStripe,
  FaLayerGroup,
  FaCubes,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaCreditCard,
} from "react-icons/fa";
import {
  SiDart,
  SiJavascript,
  SiFlutter,
  SiAndroid,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiAuth0,
  SiPostman,
  SiRazorpay,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDevices, MdSync } from "react-icons/md";

// --- Data Defined Outside ---
const SKILL_CATEGORIES = [
  {
    id: "lang",
    title: "Programming Languages",
    icon: FaCode,
    description: "Core languages I use for development",
    items: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Dart", icon: <SiDart />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 },
      { name: "SQL", icon: <FaDatabase />, level: 75 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Frontend",
    icon: FaMobileAlt,
    description: "Building beautiful user interfaces",
    items: [
      { name: "Flutter", icon: <SiFlutter />, level: 90 },
      { name: "Android SDK", icon: <SiAndroid />, level: 85 },
      { name: "RESTful APIs", icon: <TbApi />, level: 88 },
      { name: "Responsive UI", icon: <MdDevices />, level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: FaServer,
    description: "Server-side development expertise",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "MySQL", icon: <SiMysql />, level: 82 },
      { name: "Firebase", icon: <SiFirebase />, level: 88 },
      { name: "OAuth2", icon: <SiAuth0 />, level: 75 },
    ],
  },
  {
    id: "tools",
    title: "State & Tools",
    icon: FaTools,
    description: "Development tools and workflows",
    items: [
      { name: "Riverpod", icon: <FaLayerGroup />, level: 85 },
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "Docker", icon: <FaDocker />, level: 75 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
      { name: "Hive", icon: <FaDatabase />, level: 78 },
    ],
  },
  {
    id: "payment",
    title: "Integrations",
    icon: FaCreditCard,
    description: "Third-party services and APIs",
    items: [
      { name: "Razorpay", icon: <SiRazorpay />, level: 80 },
      { name: "Stripe", icon: <FaStripe />, level: 75 },
      { name: "Realtime Sync", icon: <MdSync />, level: 82 },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
      id="skills"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-primary), transparent 90%)",
              color: "var(--color-primary)",
              border: "1px solid var(--color-border)",
            }}
          >
            What I Bring to the Table
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A comprehensive skill set built through hands-on experience and
            continuous learning
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {SKILL_CATEGORIES.map((cat, index) => {
          const isSelected = selectedCategory === index;

          return (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(isSelected ? null : index)}
              className="relative group cursor-pointer"
            >
              <motion.div
                layout
                className="h-full p-6 rounded-3xl border transition-all duration-300 overflow-hidden relative"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: isSelected
                    ? "var(--color-primary)"
                    : "var(--color-border)",
                  boxShadow: isSelected
                    ? "0 0 30px -10px var(--color-shadow)"
                    : "none",
                }}
              >
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
                  }}
                />

                {/* Card Header */}
                <motion.div
                  layout
                  className="relative z-10 flex items-start justify-between mb-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-primary), transparent 90%)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <cat.icon size={20} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {cat.items.length} Skills
                      </p>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: isSelected ? 180 : 0 }}
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Content Area */}
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {!isSelected ? (
                      // Collapsed: Tag Cloud
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-2"
                      >
                        {cat.items.slice(0, 4).map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-1 rounded-md border flex items-center gap-1.5"
                            style={{
                              backgroundColor: "var(--color-surface-glass)",
                              borderColor: "var(--color-border)",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            <span style={{ color: "var(--color-primary)" }}>
                              {item.icon}
                            </span>
                            {item.name}
                          </span>
                        ))}
                        {cat.items.length > 4 && (
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-md border"
                            style={{
                              borderColor: "transparent",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            +{cat.items.length - 4} more
                          </span>
                        )}
                      </motion.div>
                    ) : (
                      // Expanded: Proficiency Bars
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 mt-2"
                      >
                        {cat.items.map((item, i) => (
                          <div key={i} className="group/skill">
                            <div className="flex justify-between text-sm mb-1.5">
                              <span
                                className="flex items-center gap-2 font-medium"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                <span style={{ color: "var(--color-primary)" }}>
                                  {item.icon}
                                </span>
                                {item.name}
                              </span>
                              <span
                                style={{ color: "var(--color-text-secondary)" }}
                              >
                                {item.level}%
                              </span>
                            </div>
                            <div
                              className="h-1.5 rounded-full overflow-hidden"
                              style={{
                                backgroundColor: "var(--color-surface-accent)",
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.level}%` }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                  delay: i * 0.1,
                                }}
                                className="h-full rounded-full relative"
                                style={{
                                  background:
                                    "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                                }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}


--- FILE END ---
