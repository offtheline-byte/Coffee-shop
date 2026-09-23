/* ==========================================================================
   VELVET BEAN ROASTERS - MAIN JAVASCRIPT
   Handles site content initialization, WhatsApp link formatting,
   menu card rendering, customer review card rendering, and UI interactions.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure SITE_CONFIG exists
  if (typeof SITE_CONFIG === 'undefined') {
    console.error('SITE_CONFIG is missing. Please check index.html script block.');
    return;
  }

  // 1. Initialize Business Content from SITE_CONFIG
  initSiteContent(SITE_CONFIG);

  // 2. Render Menu Cards
  renderMenuHighlights(SITE_CONFIG.menuHighlights);

  // 3. Render Customer Reviews Cards
  renderReviews(SITE_CONFIG.reviews, SITE_CONFIG.reviewsRatingAverage, SITE_CONFIG.reviewsCountText);

  // 4. Setup Navigation & Mobile Menu Interactions
  initNavigation();

  // 5. Update Copyright Year
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
});

/**
 * Updates DOM elements with content defined in SITE_CONFIG
 */
function initSiteContent(config) {
  // Page Title & Meta Tags
  document.title = `${config.shopName} | Artisanal Coffee in ${config.city}`;
  
  // Header Nav & Footer Shop Name
  setElementText('nav-shop-name', config.shopName);
  setElementText('footer-shop-name', config.shopName);
  setElementText('footer-copyright-name', config.shopName);

  // Hero Section
  setElementText('hero-city-badge', `☕ ${config.city}'s Favorite Cafe`);
  setElementText('hero-title', config.shopName);
  setElementText('hero-tagline', config.tagline);
  setElementText('footer-tagline', `${config.tagline}`);

  // About Section
  setElementText('about-story-text', config.aboutStory);

  // Hours & Location Section
  setElementText('hours-weekday', config.hoursWeekday);
  setElementText('hours-weekend', config.hoursWeekend);
  setElementText('cafe-address', config.address);

  if (config.googleMapsEmbedUrl) {
    const iframe = document.getElementById('google-maps-iframe');
    if (iframe) iframe.src = config.googleMapsEmbedUrl;
  }

  // Instagram Handle & Links
  const instaHandle = config.instagramHandle ? `@${config.instagramHandle.replace('@', '')}` : '@cafe';
  const instaUrl = config.instagramUrl || `https://instagram.com/${config.instagramHandle}`;
  
  setElementText('nav-instagram-text', instaHandle);
  setElementText('footer-instagram-handle', instaHandle);

  setElementHref('nav-instagram-link', instaUrl);
  setElementHref('footer-instagram-link', instaUrl);

  // Build WhatsApp URL
  const whatsappUrl = buildWhatsAppUrl(config.phoneNumber, config.whatsappMessage);

  // Update all WhatsApp buttons
  setElementHref('header-whatsapp-btn', whatsappUrl);
  setElementHref('hero-whatsapp-btn', whatsappUrl);
  setElementHref('location-whatsapp-btn', whatsappUrl);
  setElementHref('footer-whatsapp-link', whatsappUrl);
  setElementHref('floating-whatsapp-btn', whatsappUrl);
}

/**
 * Constructs clean wa.me link with URL-encoded prefilled message
 */
function buildWhatsAppUrl(phone, message) {
  const cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
  const encodedMsg = encodeURIComponent(message || "Hi! I'd like to know more about your cafe.");
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

/**
 * Renders static preview cards for popular menu items
 */
function renderMenuHighlights(items) {
  const gridContainer = document.getElementById('menu-highlights-grid');
  if (!gridContainer || !Array.isArray(items)) return;

  gridContainer.innerHTML = items.map(item => `
    <div class="menu-card">
      <div class="menu-card-image">
        ${item.tag ? `<span class="badge badge-card menu-card-badge">${escapeHtml(item.tag)}</span>` : ''}
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.src='images/hero.png'">
      </div>
      <div class="menu-card-body">
        <div class="menu-card-header">
          <h3 class="menu-card-title">${escapeHtml(item.name)}</h3>
          <span class="menu-card-price">${escapeHtml(item.price)}</span>
        </div>
        <p class="menu-card-description">${escapeHtml(item.description)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Renders Customer Review Cards dynamically
 */
function renderReviews(reviews, ratingAvg, ratingCount) {
  setElementText('rating-score', `${ratingAvg || '4.9'} / 5.0`);
  setElementText('rating-count', ratingCount || '150+ Verified Reviews');

  const reviewsGrid = document.getElementById('reviews-grid');
  if (!reviewsGrid || !Array.isArray(reviews)) return;

  reviewsGrid.innerHTML = reviews.map(review => {
    const starString = '★'.repeat(review.rating || 5);
    return `
      <div class="review-card">
        <div>
          <div class="review-card-header">
            <div class="review-stars">${starString}</div>
            <span class="review-quote-mark">&ldquo;</span>
          </div>
          <p class="review-comment">"${escapeHtml(review.comment)}"</p>
        </div>
        <div class="review-author">
          <img src="${escapeHtml(review.avatar)}" alt="${escapeHtml(review.name)}" class="author-avatar" loading="lazy" onerror="this.src='images/hero.png'">
          <div class="author-info">
            <h4>${escapeHtml(review.name)}</h4>
            <p>${escapeHtml(review.role)} ${review.date ? `• ${escapeHtml(review.date)}` : ''}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Mobile Navigation Toggle and Scroll Effects
 */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Header background shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
}

/**
 * Helper to update element text textContent safely
 */
function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

/**
 * Helper to update link href attribute safely
 */
function setElementHref(id, href) {
  const el = document.getElementById(id);
  if (el && href) {
    el.href = href;
  }
}

/**
 * Simple HTML Escaping for Security
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
