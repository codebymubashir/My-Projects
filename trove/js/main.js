/* =========================================================
   TROVE — Site-wide behaviour
   Mobile nav, cart drawer wiring, scroll reveal, image fallback
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Mobile nav toggle ---------- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  /* ---------- Cart drawer open/close wiring ---------- */
  var cartBtn = document.getElementById("cartBtn");
  var cartClose = document.getElementById("cartClose");
  var overlay = document.getElementById("overlay");

  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (cartClose) cartClose.addEventListener("click", closeCartDrawer);
  if (overlay) overlay.addEventListener("click", closeCartDrawer);

  updateCartCount();
  renderCartDrawer();

  /* ---------- Newsletter form (front-end only) ---------- */
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("You're on the list!");
      newsletterForm.reset();
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Broken image fallback (delegated, catches all product/media images) ---------- */
  document.querySelectorAll("img[data-fallback-icon]").forEach(function (img) {
    img.addEventListener("error", function () {
      var wrap = img.closest(".product-thumb, .gallery-main, .hero-art .frame, .cat-card, .about-hero img, .testi-card");
      if (wrap) wrap.classList.add("broken");
    });
  });
});
