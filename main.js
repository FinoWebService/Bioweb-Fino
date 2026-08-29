/**
 * script.js
 * Semua data (profil, link, email, sosial media, portfolio) ada di satu
 * objek CONFIG di bawah ini. Cukup edit CONFIG — Anda tidak perlu
 * menyentuh index.html untuk mengganti konten.
 *
 * Halaman tetap berfungsi tanpa JavaScript: index.html sudah berisi
 * tautan HTML biasa (fallback) dengan nilai default yang sama dengan
 * CONFIG di bawah. Saat JavaScript aktif, fungsi di file ini akan
 * menyinkronkan tautan tersebut agar selalu mengikuti CONFIG.
 */

const CONFIG = {
  // ================= PROFIL =================
  profile: {
    name: "Nama Anda",
    // Kalimat sambutan yang tampil di bawah nama
    bio: "Selamat datang! Semua platform, konten, dan link penting saya tersedia di satu tempat.",
    avatarSrc: "assets/profile.jpg",
    avatarAlt: "Foto profil",
  },

  // ================= TAUTAN UTAMA =================
  // Urutkan dari yang paling penting di posisi paling atas.
  // icon: "game" | "mail" | "link" (ikon generik jika ingin menambah link baru)
  links: [
    {
      id: "cermatrix",
      label: "CERMATRIX",
      url: "https://cermatrix.example.com",
      icon: "game",
      badge: "Main",
      featured: true,
    },
    // Tambah link baru dengan menyalin blok di atas, contoh:
    // { id: "portofolio", label: "Portofolio", url: "https://...", icon: "link" },
  ],

  // ================= KONTAK (EMAIL SAJA) =================
  // Isi "email" untuk menampilkan tombol "Email Saya". Kosongkan ("") untuk menyembunyikannya.
  // Sengaja tidak ada opsi WhatsApp/telepon/formulir kontak demi privasi pengunjung & pemilik halaman.
  email: "",
  emailNote: "Untuk kerja sama atau pertanyaan profesional.",

  // ================= PORTFOLIO / KARYA UNGGULAN (OPSIONAL) =================
  // Kosongkan array ini ([]) jika tidak ingin menampilkan section ini sama sekali.
  portfolio: [
    // Contoh:
    // {
    //   title: "Nama Karya",
    //   description: "Deskripsi singkat satu-dua kalimat.",
    //   url: "https://...",
    //   image: "assets/portfolio-1.jpg",
    // },
  ],

  // ================= MEDIA SOSIAL =================
  socials: [
    { id: "instagram", label: "Instagram", url: "https://instagram.com/username" },
    { id: "tiktok", label: "TikTok", url: "https://tiktok.com/@username" },
    { id: "youtube", label: "YouTube", url: "https://youtube.com/@username" },
    { id: "facebook", label: "Facebook", url: "https://facebook.com/username" },
  ],
};

/* =====================================================
   IKON (SVG inline — tanpa CDN pihak ketiga, ringan & privat)
   ===================================================== */
const ICONS = {
  game: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="4" stroke="currentColor" stroke-width="1.6"/>
    <path d="M7 10v4M5 12h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="16" cy="10.5" r="1" fill="currentColor"/>
    <circle cx="18.3" cy="12.8" r="1" fill="currentColor"/>
  </svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6"/>
    <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 15l6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M11 6.5l1-1a3.5 3.5 0 0 1 5 5l-1 1M13 17.5l-1 1a3.5 3.5 0 0 1-5-5l1-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>
  </svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 3v10.6a3.4 3.4 0 1 1-2.4-3.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 3c.5 2.4 2.2 4 4.6 4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" stroke-width="1.6"/>
    <path d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" fill="currentColor"/>
  </svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.6"/>
    <path d="M13.6 21v-6.6h2.2l.3-2.6h-2.5V10c0-.75.2-1.26 1.28-1.26h1.37V6.4c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.9H8.6v2.6h2.35V21" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`,
};

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  syncProfile();
  syncLinks();
  syncEmail();
  syncPortfolio();
  syncSocials();
  enableRippleEffect();
});

/* Isi tahun berjalan otomatis di footer */
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* Sinkronkan foto, nama, dan bio dari CONFIG */
function syncProfile() {
  const { name, bio, avatarSrc, avatarAlt } = CONFIG.profile;

  const nameEl = document.getElementById("profileName");
  const bioEl = document.getElementById("profileBio");
  const avatarEl = document.getElementById("avatar");

  if (nameEl) nameEl.textContent = name;
  if (bioEl) bioEl.textContent = bio;
  if (avatarEl) {
    if (avatarSrc) avatarEl.src = avatarSrc;
    if (avatarAlt) avatarEl.alt = avatarAlt;
  }

  if (name) document.title = `${name} — Bio Link`;
}

/* Bangun ulang daftar tombol link utama dari CONFIG.links */
function syncLinks() {
  const nav = document.getElementById("linksNav");
  if (!nav || !Array.isArray(CONFIG.links) || CONFIG.links.length === 0) return;

  nav.innerHTML = "";

  CONFIG.links.forEach((item) => {
    const a = document.createElement("a");
    a.className = "link-btn" + (item.featured ? " link-btn--featured" : "");
    a.href = item.url;
    a.target = "_blank";
    // Keamanan link: cegah tab-nabbing & kebocoran referrer ke situs tujuan
    a.rel = "noopener noreferrer";
    if (item.id) a.dataset.linkId = item.id;

    const iconSpan = document.createElement("span");
    iconSpan.className = "link-btn__icon";
    iconSpan.setAttribute("aria-hidden", "true");
    iconSpan.innerHTML = ICONS[item.icon] || ICONS.link;

    const textSpan = document.createElement("span");
    textSpan.className = "link-btn__text";
    textSpan.textContent = item.label;

    a.append(iconSpan, textSpan);

    if (item.badge) {
      const badgeSpan = document.createElement("span");
      badgeSpan.className = "link-btn__badge";
      badgeSpan.textContent = item.badge;
      a.append(badgeSpan);
    }

    nav.append(a);
  });
}

/* Tampilkan tombol Email HANYA jika CONFIG.email diisi */
function syncEmail() {
  const section = document.getElementById("emailSection");
  const button = document.getElementById("emailButton");
  const note = section ? section.querySelector(".contact-note") : null;

  if (!section || !button) return;

  const email = (CONFIG.email || "").trim();

  if (!email) {
    section.hidden = true;
    return;
  }

  button.href = `mailto:${email}`;
  if (note) note.textContent = CONFIG.emailNote || "";
  section.hidden = false;
}

/* Tampilkan section Portfolio HANYA jika CONFIG.portfolio berisi item */
function syncPortfolio() {
  const section = document.getElementById("portfolioSection");
  const grid = document.getElementById("portfolioGrid");
  if (!section || !grid) return;

  const items = Array.isArray(CONFIG.portfolio) ? CONFIG.portfolio : [];
  if (items.length === 0) {
    section.hidden = true;
    return;
  }

  grid.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";

    if (item.image) {
      const img = document.createElement("img");
      img.className = "portfolio-card__image";
      img.src = item.image;
      img.alt = item.title ? `Pratinjau ${item.title}` : "Pratinjau karya";
      img.loading = "lazy"; // di bawah lipatan layar, aman untuk lazy-load
      img.decoding = "async";
      card.append(img);
    }

    const body = document.createElement("div");
    body.className = "portfolio-card__body";

    const title = document.createElement("h3");
    title.className = "portfolio-card__title";
    title.textContent = item.title || "";
    body.append(title);

    if (item.description) {
      const desc = document.createElement("p");
      desc.className = "portfolio-card__desc";
      desc.textContent = item.description;
      body.append(desc);
    }

    if (item.url) {
      const link = document.createElement("a");
      link.className = "portfolio-card__link";
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `Lihat ${item.title || "karya"} →`;
      body.append(link);
    }

    card.append(body);
    grid.append(card);
  });

  section.hidden = false;
}

/* Sinkronkan ikon media sosial dari CONFIG.socials */
function syncSocials() {
  if (!Array.isArray(CONFIG.socials)) return;

  CONFIG.socials.forEach((item) => {
    const el = document.querySelector(`[data-social-id="${item.id}"]`);
    if (!el) return;
    if (item.url) el.href = item.url;
    if (item.label) {
      el.setAttribute("aria-label", `Kunjungi ${item.label} saya`);
      el.setAttribute("data-tip", item.label);
    }
  });
}

/* Efek ripple saat tombol link disentuh/diklik (dilewati jika reduced-motion) */
function enableRippleEffect() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".link-btn");
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.4;

    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    btn.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 500);
  });
}