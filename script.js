const c = window.SITE_CONFIG;

function applyConfig() {
  if (!c) return;

  document.title = c.business.siteTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = c.business.description;

  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = c.business.brand);
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = c.business.phone);
  document.querySelectorAll("[data-email]").forEach(el => el.textContent = c.business.email);
  document.querySelectorAll("[data-area]").forEach(el => el.textContent = c.business.area);

  document.querySelector("[data-hero-title]").textContent = c.hero.title;
  document.querySelector("[data-hero-text]").textContent = c.hero.text;
  document.querySelector("[data-about-title]").textContent = c.about.title;
  document.querySelector("[data-about-text]").textContent = c.about.text;
  document.querySelector("[data-booking-title]").textContent = c.booking.title;
  document.querySelector("[data-footer-text]").textContent = c.business.footerText;
  document.querySelector("[data-copyright]").textContent = `© ${new Date().getFullYear()} ${c.business.fullName}`;

  document.querySelectorAll("[data-image]").forEach(img => {
    const key = img.dataset.image;
    if (c.images[key]) img.src = c.images[key];
  });

  renderServices();
  renderGallery();
  renderPricing();
}

function renderServices() {
  const grid = document.getElementById("services-grid");
  grid.innerHTML = c.services.map(s => `
    <article class="service-card">
      <img src="${c.images[s.imageKey]}" alt="${s.name}">
      <div class="service-content">
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <a class="service-link" href="#boka">${window.TASS_TR ? window.TASS_TR("Boka behandling") : "Boka behandling"}</a>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = c.gallery.map(item => `
    <figure class="gallery-item ${item.className || ""}">
      <img src="${c.images[item.imageKey]}" alt="${item.alt}">
    </figure>
  `).join("");
}

function renderPricing() {
  const grid = document.getElementById("pricing-grid");
  grid.innerHTML = c.pricing.map(p => `
    <article class="price-card ${p.featured ? "featured" : ""}">
      ${p.featured ? `<span class="price-badge">${window.TASS_TR ? window.TASS_TR("POPULÄR") : "POPULÄR"}</span>` : ""}
      <h3>${p.name}</h3>
      <p class="price-sub">${p.subtitle}</p>
      <strong class="price-amount">${p.price}</strong>
      <ul>
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const form = document.querySelector("[data-contact-form]");
form.addEventListener("submit", e => {
  if (c.form.mode === "external" && c.form.actionUrl) {
    form.action = c.form.actionUrl;
    return;
  }

  e.preventDefault();
  document.getElementById("form-status").textContent =
    (window.TASS_TR ? window.TASS_TR("Demoformulär. Här kopplas kundens bokningsformulär eller formulärtjänst in.") : "Demoformulär. Här kopplas kundens bokningsformulär eller formulärtjänst in.");
  form.reset();
});

applyConfig();
