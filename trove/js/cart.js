/* =========================================================
   TROVE — Cart logic
   Uses localStorage + JSON, plain arrays/objects, no external APIs
   ========================================================= */

const CART_KEY = "trove_cart";

function getCart() {
  var raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
  renderCartDrawer();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  var cart = getCart();
  var existing = cart.find(function (item) { return item.id === productId; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
  showToast("Added to cart");
  openCartDrawer();
}

function removeFromCart(productId) {
  var cart = getCart().filter(function (item) { return item.id !== productId; });
  saveCart(cart);
}

function changeQty(productId, delta) {
  var cart = getCart();
  var item = cart.find(function (i) { return i.id === productId; });
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) {
    cart = cart.filter(function (i) { return i.id !== productId; });
  }
  saveCart(cart);
}

function cartTotalItems() {
  return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function cartSubtotal() {
  var cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var product = getProductById(cart[i].id);
    if (product) total += product.price * cart[i].qty;
  }
  return total;
}

function updateCartCount() {
  var badges = document.querySelectorAll(".cart-count");
  var count = cartTotalItems();
  badges.forEach(function (b) {
    b.textContent = count;
    b.style.display = count > 0 ? "flex" : "none";
  });
}

/* ---------- Cart drawer rendering ---------- */
function renderCartDrawer() {
  var container = document.getElementById("cartItems");
  var foot = document.getElementById("cartFoot");
  if (!container) return;

  var cart = getCart();

  if (cart.length === 0) {
    container.innerHTML =
      '<div class="cart-empty"><div class="ce-icon">🗃️</div>' +
      "<p>Your trove is empty.</p></div>";
    if (foot) foot.style.display = "none";
    return;
  }

  if (foot) foot.style.display = "block";

  var html = "";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var product = getProductById(item.id);
    if (!product) continue;
    html +=
      '<div class="cart-item">' +
      '<img src="' + product.images[0] + '" alt="' + product.name + '" onerror="this.style.display=\'none\'">' +
      '<div class="cart-item-info">' +
      '<span class="ci-name">' + product.name + "</span>" +
      '<span class="ci-price">$' + product.price + "</span>" +
      '<div class="qty-stepper">' +
      '<button onclick="changeQty(' + product.id + ', -1)" aria-label="Decrease quantity">–</button>' +
      "<span>" + item.qty + "</span>" +
      '<button onclick="changeQty(' + product.id + ', 1)" aria-label="Increase quantity">+</button>' +
      "</div>" +
      '<button class="ci-remove" onclick="removeFromCart(' + product.id + ')">Remove</button>' +
      "</div>" +
      "</div>";
  }
  container.innerHTML = html;

  var subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = "$" + cartSubtotal();
}

function openCartDrawer() {
  var drawer = document.getElementById("cartDrawer");
  var overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  var drawer = document.getElementById("cartDrawer");
  var overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function showToast(message) {
  var toast = document.getElementById("toast");
  if (!toast) return;
  toast.querySelector(".t-text").textContent = message;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}
