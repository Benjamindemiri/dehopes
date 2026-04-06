/* ===== SAMPLE PRODUCTS ===== */
const products = [
    { id: 'p1', title: 'Fresh Tomatoes', category: 'Vegetables', price: 8, image: 'https://via.placeholder.com/250x200?text=Tomatoes', desc: 'Fresh, organic tomatoes' },
    { id: 'p2', title: 'Bananas', category: 'Fruits', price: 12, image: 'https://via.placeholder.com/250x200?text=Bananas', desc: 'Sweet ripe bananas' },
    { id: 'p3', title: 'Whole Milk', category: 'Dairy', price: 15, image: 'https://via.placeholder.com/250x200?text=Milk', desc: 'Fresh whole milk' },
    { id: 'p4', title: 'Bread', category: 'Bakery', price: 10, image: 'https://via.placeholder.com/250x200?text=Bread', desc: 'Soft whole wheat bread' }
];

/* ===== CART ===== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/* ===== DISPLAY PRODUCTS ===== */
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}">
            <h3>${p.title}</h3>
            <div>GH¢${p.price}</div>
            <p class="muted">${p.desc}</p>
            <button class="cta" onclick="viewProduct('${p.id}')">View</button>
        `;
        grid.appendChild(card);
    });
}

/* ===== PRODUCT DETAIL PAGE ===== */
function viewProduct(id) {
    location.href = 'product.html?id=' + id;
}

function getQueryId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function displayProductDetail() {
    const id = getQueryId();
    const product = products.find(p => p.id === id);
    if (!product) return;
    document.getElementById('pdImg').src = product.image;
    document.getElementById('pdTitle').innerText = product.title;
    document.getElementById('pdCat').innerText = product.category;
    document.getElementById('pdPrice').innerText = product.price;
    document.getElementById('pdDesc').innerText = product.desc;
}

function addFromDetail() {
    const id = getQueryId();
    const qty = parseInt(document.getElementById('qty').value);
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, qty });
    saveCart();
    alert('Added to cart!');
}

/* ===== DISPLAY CART ===== */
function displayCart() {
    const cartDiv = document.getElementById('cartItems');
    if (!cartDiv) return;
    cartDiv.innerHTML = '';
    let total = 0;
    cart.forEach(c => {
        const prod = products.find(p => p.id === c.id);
        total += prod.price * c.qty;
        const div = document.createElement('div');
        div.className = 'card';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.innerHTML = `
            <div>${prod.title} (${c.qty})</div>
            <div>GH¢${prod.price*c.qty}</div>
        `;
        cartDiv.appendChild(div);
    });
    document.getElementById('cartTotal').innerText = total;
}

function goCheckout() {
    if (cart.length === 0) { alert('Cart is empty'); return; }
    location.href = 'checkout.html';
}

/* ===== CHECKOUT ===== */
function submitOrder() {
    alert('Order placed successfully!');
    cart = [];
    saveCart();
    location.href = 'index.html';
    return false;
}

/* ===== SEARCH ===== */
function searchProducts() {
    const input = document.getElementById('prodSearch') || document.getElementById('homeSearch');
    if (!input) return;
    const q = input.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(q));
    localStorage.setItem('searchResults', JSON.stringify(filtered));
    location.href = 'products.html';
}

/* ===== ADMIN DEMO ===== */
function addSampleProduct() {
    const id = 'p' + (products.length + 1);
    products.push({ id, title: 'New Product', category: 'Misc', price: 10, image: 'https://via.placeholder.com/250x200', desc: 'Sample product' });
    alert('Sample product added!');
    displayAdminProducts();
}

function displayAdminProducts() {
    const grid = document.getElementById('adminProductsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h4>${p.title}</h4><div>GH¢${p.price}</div>`;
        grid.appendChild(card);
    });
}

/* ===== INITIALIZE PAGES ===== */
window.onload = () => {
    displayProducts();
    displayProductDetail();
    displayCart();
    displayAdminProducts();
};
const toggleBtn = document.getElementById("darkToggle");

// Check saved mode from previous visit
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("mode", "dark"); // Save mode
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("mode", "light"); // Save mode
    }
});
const switcher = document.getElementById("darkSwitch");

// Load saved theme
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    switcher.checked = true;
}

// Toggle when clicked
switcher.addEventListener("change", () => {
    if (switcher.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("mode", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("mode", "light");
    }
});
// Create floating stars
function createStars() {
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 60; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDuration = (4 + Math.random() * 6) + "s";
        starsContainer.appendChild(star);
    }
}

createStars();