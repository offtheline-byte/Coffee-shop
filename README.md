# Velvet Bean Roasters - Single-Page Coffee Shop Website

A modern, responsive, mobile-first single-page website for **Velvet Bean Roasters**. Designed with warm coffee aesthetics (cream, espresso brown, soft caramel accent), smooth micro-animations, menu preview cards, customer reviews section, location map, and direct WhatsApp click-to-chat integration.

---

## 🛠️ How to Edit Content (No Coding Experience Required!)

All editable content (shop name, city, tagline, phone number, WhatsApp message, Instagram handle, opening hours, address, menu items, and customer reviews) is centralized at the **top of `index.html`** inside the `<script>` tag marked `SITE_CONFIG`.

### Step 1: Open `index.html`
Open `index.html` in any text editor (Notepad, VS Code, or GitHub file editor).

### Step 2: Locate `SITE_CONFIG`
Near the top of `index.html` (around line 25), you will see:

```javascript
const SITE_CONFIG = {
  shopName: "Velvet Bean Roasters",
  city: "San Francisco",
  tagline: "Artisanal Coffee & Fresh Pastries Roasted with Passion",
  
  // Phone number formatted with country code (no + or spaces)
  phoneNumber: "15550192834",
  whatsappMessage: "Hi! I'd like to know more about Velvet Bean Roasters.",
  
  instagramHandle: "velvetbeanroasters",
  instagramUrl: "https://instagram.com/velvetbeanroasters",
  
  address: "452 Espresso Way, Downtown, San Francisco, CA 94105",
  hoursWeekday: "Mon - Fri: 7:00 AM - 7:00 PM",
  hoursWeekend: "Sat - Sun: 8:00 AM - 6:00 PM",
  
  // Menu highlights preview cards
  menuHighlights: [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich, velvety double shot brewed from single-origin beans.",
      price: "$3.50",
      tag: "House Special",
      image: "images/espresso.png"
    }
  ],

  // Customer Reviews & Testimonials
  reviewsRatingAverage: "4.9",
  reviewsCountText: "150+ Verified Customer Reviews",
  reviews: [
    {
      id: 1,
      name: "Sophia Martinez",
      role: "Local Coffee Enthusiast",
      rating: 5,
      comment: "The Velvet Cappuccino is hands down the best coffee in San Francisco!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      date: "2 days ago"
    }
  ]
};
```

### Step 3: Edit Your Info & Save!
- Change `shopName` to your coffee shop's name.
- Change `phoneNumber` to your mobile number with country code (e.g. `14155552671` for US or `919876543210` for India).
- Update the menu items, prices, customer reviews, and ratings.
- Save the file and reload `index.html` in your web browser to preview changes immediately!

---

## 🚀 Deployment Instructions (100% Free Hosting)

This project is built as a static site and requires **zero server setup or backend code**.

### Option 1: Deploy on Netlify (Recommended)
1. Sign up for a free account at [Netlify.com](https://www.netlify.com/).
2. Log in and drag-and-drop the `coffee-shop-website` folder onto the Netlify Dashboard (Sites tab).
3. Netlify will publish your website instantly in under 10 seconds!

### Option 2: Deploy on Vercel
1. Install the Vercel CLI via terminal (`npm i -g vercel`) or sign up at [Vercel.com](https://vercel.com).
2. Run `vercel` in the project root directory or import your GitHub repository.
3. Select "Other" for project framework and click **Deploy**.

### Option 3: Deploy on GitHub Pages
1. Push this project repository to your GitHub account.
2. Go to **Repository Settings** -> **Pages**.
3. Under **Branch**, select `main` branch and `/ (root)` folder.
4. Click **Save**. Your site will be live at `https://[your-username].github.io/[repo-name]`.

---

## 🌐 Connecting a Custom Domain (Client-Provided Domain)

When the client purchases their domain name (e.g., `www.myawesomecafe.com`):

1. **On Netlify / Vercel**:
   - Go to **Domain Management** -> **Add Custom Domain**.
   - Enter `www.myawesomecafe.com`.
   - Copy the provided DNS Nameservers (or A / CNAME records) and paste them into your domain registrar (GoDaddy, Namecheap, Google Domains).
2. SSL/HTTPS security certificates are automatically issued for free!

---

## 📁 Project File Structure

```
coffee-shop-website/
├── index.html        # Main HTML layout & SITE_CONFIG section
├── css/
│   └── styles.css    # Responsive styles, warm coffee color palette, typography
├── js/
│   └── main.js       # Dynamic content binding, reviews rendering & mobile navigation
├── images/           # Coffee shop hero, about, & menu images
├── favicon.svg       # Coffee cup browser tab icon
├── netlify.toml      # Netlify host config & security headers
├── vercel.json       # Vercel deployment configuration
├── README.md         # Non-developer editing & deployment guide
└── SUMMARY.md        # Technical scope summary
```
