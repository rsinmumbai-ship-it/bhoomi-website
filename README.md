# Bhoomi Solutions Website & Squarespace Domain Integration Guide

This repository contains the complete custom web application for **Bhoomi Solutions Ltd** (`www.bhoomisolutionsltd.com`), built with modern HTML5, CSS3, and JavaScript following the exact colors, logo, typography, and interactive headers from your design.

---

## 🚀 How to Preview Locally

To launch and preview your website locally:
1. Open PowerShell or Command Prompt in this folder:
   ```bash
   cd C:\Users\imsra\.gemini\antigravity\scratch\custom-website
   ```
2. Run a local web server:
   ```bash
   npx serve .
   ```
3. Open your browser at `http://localhost:3000` to interact with the site!

---

## 🌐 Step-by-Step Hosting & Squarespace Domain Setup

You can host this website completely **FREE** with automatic SSL (HTTPS) on **Vercel** or **Netlify** without paying for a Squarespace website builder plan!

### Step 1: Deploy to Vercel (Free Hosting)
1. Go to [vercel.com](https://vercel.com) and log in or create a free account.
2. Click **Add New Project** -> **Upload Folder** (or push to GitHub and import).
3. Select the `custom-website` folder.
4. Click **Deploy**. Vercel will deploy your site in ~15 seconds and give you a live URL (e.g. `bhoomi-solutions.vercel.app`).

---

### Step 2: Connect Your Domain in Squarespace

1. Log into your **Squarespace Account** at [domains.squarespace.com](https://domains.squarespace.com).
2. Select your domain: `bhoomisolutionsltd.com`.
3. Click on **DNS Settings** (or **Manage Domain Records**).
4. Remove default placeholder parking records if any, then add the following records:

#### A Record (Main Domain):
- **Host**: `@`
- **Type**: `A`
- **Points To**: `76.76.21.21` (If using Vercel) or `75.2.60.5` (If using Netlify)

#### CNAME Record (Subdomain):
- **Host**: `www`
- **Type**: `CNAME`
- **Points To**: `cname.vercel-dns.com` (If using Vercel) or `your-app-name.netlify.app` (If using Netlify)

---

### Step 3: Verify Domain in Vercel / Netlify
1. In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2. Type `www.bhoomisolutionsltd.com` and `bhoomisolutionsltd.com` and click **Add**.
3. Vercel will automatically verify the DNS records and issue a free SSL certificate! Your website will now be live worldwide at `https://www.bhoomisolutionsltd.com`!

---

## 🎨 Features & Architecture
- **Interactive Header Navigation Tabs**: `Home`, `About Us`, `Solutions`, `Industries`, `Projects`, `Why Us`, `Contact` with smooth-scrolling active indicators and scrollspy.
- **Dynamic Industry Switcher**: 8 industry tabs (`Customer Service`, `E-commerce`, `Healthcare`, `Finance`, `Manufacturing`, `Real Estate`, `Education`, `Logistics`) updating featured case study cards in real time.
- **Responsive & Mobile Ready**: Full drawer navigation menu for mobile devices.
- **Brand Colors**: Royal Electric Blue (`#0052FF`), Cyan (`#00C6FF`), and Deep Dark Navy (`#070D1E`).
