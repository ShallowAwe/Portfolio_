# Rudrankur Indurkar - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with React, Framer Motion, and Tailwind CSS.

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

## 👤 Author

**Rudrankur Indurkar**

- GitHub: [@ShallowAwe](https://github.com/ShallowAwe)
- LinkedIn: [Rudrankur Indurkar](https://linkedin.com/in/rudrankur-indurkar)
- Email: rudraindurkar670@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ Star this repo if you find it helpful!
