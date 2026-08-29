/**
 * script.js
 * Interaksi ringan untuk halaman bio link.
 * Tidak butuh build step / server — cukup dimuat langsung oleh browser.
 */

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  enableRippleEffect();
});

/* Isi tahun berjalan otomatis di footer */
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* Efek ripple saat tombol link disentuh/diklik */
function enableRippleEffect() {
  const buttons = document.querySelectorAll(".link-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height) * 1.4;

      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      btn.appendChild(ripple);

      // Bersihkan elemen ripple setelah animasinya selesai
      window.setTimeout(() => ripple.remove(), 650);
    });
  });
}