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
