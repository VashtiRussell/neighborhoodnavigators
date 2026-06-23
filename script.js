function getCart() {
  return JSON.parse(localStorage.getItem('nnCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('nnCart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  alert(item + ' added to cart!');
}

function clearCart() {
  saveCart([]);
  renderCart();
}

function updateCartCount() {
  const count = document.getElementById('cart-count');
  if (count) count.textContent = getCart().length;
}

function renderCart() {
  const list = document.getElementById('cart-items');
  if (!list) return;
  const cart = getCart();
  list.innerHTML = '';
  if (cart.length === 0) {
    list.innerHTML = '<li>Your cart is empty.</li>';
    return;
  }
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

updateCartCount();
renderCart();
