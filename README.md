# Arjun Reddy — Portfolio

Premium personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Deploy to Vercel (Step by Step)

### Step 1: Push to GitHub

```bash
# Create a new repo on github.com/arjunreddy0729/portfolio
# Then in your terminal:
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/arjunreddy0729/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New → Project"**
3. Import your `portfolio` repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. In ~60 seconds you'll get a live URL like `portfolio-arjun.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain (e.g., `arjunreddy.dev`)
3. Update DNS records as Vercel instructs

### Step 4: Add to Resume

Add your live portfolio URL to your resume:
```
Portfolio: https://your-portfolio.vercel.app
```

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind + custom animations
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page (imports all sections)
├── components/
│   ├── data.js              # All resume data (edit this!)
│   ├── hooks.js             # Custom React hooks
│   ├── SectionHeader.js     # Reusable section header
│   ├── FloatingOrbs.js      # Animated background
│   ├── Nav.js               # Sticky nav with mobile menu
│   ├── Hero.js              # Hero with staggered reveals
│   ├── About.js             # Bio + education cards
│   ├── Experience.js        # Work experience timeline
│   ├── Projects.js          # Glassmorphism project cards
│   ├── Skills.js            # Skills grid + certifications
│   ├── Contact.js           # Contact CTA
│   └── Footer.js            # Footer
├── public/                  # Static assets (add profile photo here)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ✏️ How to Update Content

All your personal data lives in **`components/data.js`**. Edit that single file to update:
- Name, title, tagline
- Education, experience
- Projects (add new ones!)
- Skills, certifications
- Contact info & social links

---

## 🎨 Design Features

- **Cinematic dark theme** with warm amber accents
- **Glassmorphism cards** with backdrop blur and hover glow
- **Framer Motion** staggered reveals and scroll animations
- **Floating orbs** ambient background
- **Responsive** mobile-first design with hamburger nav
- **SEO-optimized** with Open Graph metadata
