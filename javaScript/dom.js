let productContainer = document.getElementById('product-grid');
let cartButton = document.getElementById('cart');
let cartPanel = document.getElementById('cartPanel');
let cartOverlay = document.getElementById('cartOverlay');
let closeCartButton = document.getElementById('closeCart');
let cartItemsContainer = document.getElementById('cartItems');
let cartCountDisplay = document.getElementById('cart-count');
let cartPageCount = document.getElementById('cartCount');
let subTotalDisplay = document.getElementById('subTotal');
let totalPriceDisplay = document.getElementById('totalPrice');

let products = [
  {
    id: 1,
    photo: '../../../IMAGES/car.png',
    name: 'Luxury Sedan',
    price: 24500,
    detail: 'A smooth and stylish sedan for daily travel.'
  },
  {
    id: 2,
    photo: '../../../IMAGES/choco%20tea.jpeg',
    name: 'Hot Chocolate Tea',
    price: 6.5,
    detail: 'A rich and cozy drink with cocoa flavor.'
  },
  {
    id: 3,
    photo: '../../../IMAGES/chocolates.jpeg',
    name: 'Premium Chocolates',
    price: 8.99,
    detail: 'Handmade chocolates with a soft creamy center.'
  },
  {
    id: 4,
    photo: '../../../IMAGES/coffee%20cup.jpeg',
    name: 'Coffee Cup Set',
    price: 12,
    detail: 'A modern ceramic set for your morning coffee.'
  }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function formatPrice(value) {
  return '$' + value.toFixed(2);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartNumbers() {
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCountDisplay) {
    cartCountDisplay.textContent = totalItems;
  }

  if (cartPageCount) {
    cartPageCount.textContent = totalItems + ' item' + (totalItems === 1 ? '' : 's') + ' in cart';
  }
}

function renderCart() {
  if (!cartItemsContainer) {
    return;
  }

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
    if (subTotalDisplay) subTotalDisplay.textContent = '$0.00';
    if (totalPriceDisplay) totalPriceDisplay.textContent = '$0.00';
    updateCartNumbers();
    return;
  }

  let cartHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.photo}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)}</p>
        <div class="qty-box">
          <button class="qty-btn" data-action="minus" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
        </div>
        <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  cartItemsContainer.innerHTML = cartHTML;

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (subTotalDisplay) subTotalDisplay.textContent = formatPrice(total);
  if (totalPriceDisplay) totalPriceDisplay.textContent = formatPrice(total);
  updateCartNumbers();
}

function addToCart(productId) {
  let item = cart.find(entry => entry.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    let productData = products.find(product => product.id === productId);
    cart.push({ ...productData, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function changeQuantity(productId, change) {
  cart = cart
    .map(item => {
      if (item.id === productId) {
        let newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    })
    .filter(Boolean);

  saveCart();
  renderCart();
}

function openCart() {
  cartPanel.classList.add('show');
  cartOverlay.classList.add('show');
}

function closeCart() {
  cartPanel.classList.remove('show');
  cartOverlay.classList.remove('show');
}

function addProduct() {
  if (!productContainer) {
    return;
  }

  productContainer.innerHTML = '';

  products.forEach(product => {
    let card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.photo}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.detail}</p>
      <div class="card-foot">
        <strong>${formatPrice(product.price)}</strong>
        <button class="add-btn" data-id="${product.id}">Add to cart</button>
      </div>
    `;

    let addButton = card.querySelector('.add-btn');
    addButton.addEventListener('click', () => {
      addToCart(Number(addButton.getAttribute('data-id')));
    //   openCart();
    });

    productContainer.appendChild(card);
  });
}

if (cartButton) {
  cartButton.addEventListener('click', openCart);
}

if (closeCartButton) {
  closeCartButton.addEventListener('click', closeCart);
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', closeCart);
}

if (cartItemsContainer) {
  cartItemsContainer.addEventListener('click', (event) => {
    let button = event.target.closest('button');

    if (!button) {
      return;
    }

    let id = Number(button.getAttribute('data-id'));
    let action = button.getAttribute('data-action');

    if (action === 'plus') {
      changeQuantity(id, 1);
    } else if (action === 'minus') {
      changeQuantity(id, -1);
    } else if (action === 'remove') {
      cart = cart.filter(item => item.id !== id);
      saveCart();
      renderCart();
    }
  });
}

addProduct();
renderCart();

console.log('DOM manipulation script loaded successfully.');