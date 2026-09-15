
/* =====================================================
   ALATAWI STORE
   Main JavaScript
===================================================== */

/* =====================================================
   CATEGORIES
===================================================== */

const categories = [
    { name: "الأجهزة الذكية", icon: "📱" },
    { name: "الكفرات", icon: "🛡️" },
    { name: "الشواحن والكيابل", icon: "🔌" },
    { name: "الصوتيات", icon: "🎧" },
    { name: "الساعات الذكية", icon: "⌚" },
    { name: "ملحقات السيارة", icon: "🚗" },
    { name: "ملحقات الألعاب", icon: "🎮" },
    { name: "كاميرات المراقبة", icon: "📷" },
    { name: "الحاسب الآلي", icon: "💻" },
    { name: "الاستاندات", icon: "📱" },
    { name: "بكجات وحمايات", icon: "✨" },
    { name: "عروض", icon: "🔥" }
];


/* =====================================================
   PRODUCTS
===================================================== */
const products = [
    // iPhone
    { id: 1, name: "iPhone 12", category: "الأجهزة الذكية", price: 1499, oldPrice: 1699, image: "iphone12.jpg", rating: 4.8, featured: true },
    { id: 2, name: "iPhone 12 Pro Max", category: "الأجهزة الذكية", price: 1899, oldPrice: 2099, image: "iphone12_promax.jpeg", rating: 4.9, featured: true },
    { id: 3, name: "iPhone 15 Pro Max", category: "الأجهزة الذكية", price: 3499, oldPrice: 3799, image: "iphone15_promax.jpeg", rating: 4.9, featured: true },
    { id: 4, name: "iPhone 16 Pro Max", category: "الأجهزة الذكية", price: 3999, oldPrice: 4299, image: "iphone16_promax.jpeg", rating: 4.9, featured: true },
    { id: 5, name: "iPhone 17 Pro", category: "الأجهزة الذكية", price: 4299, oldPrice: 4599, image: "iphone17_pro.jpeg", rating: 5.0, featured: true },
    { id: 6, name: "iPhone 17 Pro Max", category: "الأجهزة الذكية", price: 4699, oldPrice: 4999, image: "iphone17_promax.jpeg", rating: 5.0, featured: true },

    // Samsung Galaxy Ultra
    { id: 7, name: "Samsung Galaxy S22 Ultra", category: "الأجهزة الذكية", price: 2299, oldPrice: 2599, image: "64365.jpeg", rating: 4.7, featured: true },
    { id: 8, name: "Samsung Galaxy S23 Ultra", category: "الأجهزة الذكية", price: 2799, oldPrice: 3199, image: "64366.jpeg", rating: 4.8, featured: true },
    { id: 9, name: "Samsung Galaxy S24 Ultra", category: "الأجهزة الذكية", price: 3299, oldPrice: 3699, image: "64367.jpeg", rating: 4.9, featured: true },
    { id: 10, name: "Samsung Galaxy S25 Ultra", category: "الأجهزة الذكية", price: 3899, oldPrice: 4299, image: "64368.jpeg", rating: 4.9, featured: true },
    { id: 11, name: "Samsung Galaxy S26 Ultra", category: "الأجهزة الذكية", price: 4499, oldPrice: 4799, image: "64369.jpeg", rating: 5.0, featured: true },

    // Xiaomi
    { id: 12, name: "Xiaomi Titanium Series", category: "الأجهزة الذكية", price: 2999, oldPrice: 3299, image: "64371.jpeg", rating: 4.8, featured: true },
    { id: 13, name: "Xiaomi Flagship Leica", category: "الأجهزة الذكية", price: 3199, oldPrice: 3499, image: "64372.jpeg", rating: 4.9, featured: true },
    { id: 14, name: "Xiaomi Smart Clock Edition", category: "الأجهزة الذكية", price: 2499, oldPrice: 2799, image: "64373.jpeg", rating: 4.7, featured: true },

    // Red Magic
    { id: 15, name: "Red Magic White Edition", category: "ملحقات الألعاب", price: 2799, oldPrice: 3099, image: "64374.jpeg", rating: 4.8, featured: true },
    { id: 16, name: "Red Magic Ultra Gaming", category: "ملحقات الألعاب", price: 2999, oldPrice: 3299, image: "64375.jpeg", rating: 4.9, featured: true },
    { id: 17, name: "Red Magic Cyber Black", category: "ملحقات الألعاب", price: 3199, oldPrice: 3499, image: "64376.jpeg", rating: 4.9, featured: true },
    { id: 18, name: "Red Magic Pro Transparent", category: "ملحقات الألعاب", price: 3399, oldPrice: 3699, image: "64377.jpeg", rating: 5.0, featured: true },

    // Apple Accessories & Audio
    { id: 19, name: "AirPods Pro 2 USB-C", category: "الصوتيات", price: 799, oldPrice: 899, image: "airpods_pro_2.jpg", rating: 4.9, featured: true },
    { id: 20, name: "AirPods Max", category: "الصوتيات", price: 1899, oldPrice: 2099, image: "airpods_max.jpg", rating: 4.8, featured: true },
    { id: 21, name: "Apple Watch Ultra 2", category: "الساعات الذكية", price: 2899, oldPrice: 3199, image: "apple_watch_ultra_2.jpg", rating: 4.9, featured: true },
    { id: 22, name: "Apple Watch Series 9", category: "الساعات الذكية", price: 1499, oldPrice: 1699, image: "apple_watch_series_9.jpg", rating: 4.8, featured: true },

    // Chargers
    { id: 23, name: "شاحن أبل سريع 20W", category: "الشواحن والكيابل", price: 89, oldPrice: 119, image: "apple_charger_20w.jpg", rating: 4.8, featured: true },
    { id: 24, name: "Anker MagGo 10000", category: "الشواحن والكيابل", price: 249, oldPrice: 299, image: "anker_maggo_10000.jpg", rating: 4.8, featured: true },

    // Accessories
    { id: 25, name: "كفر حماية شفاف مضاد للصدمات", category: "الكفرات", price: 59, oldPrice: 89, image: "clear_case.jpg", rating: 4.7, featured: true },
    { id: 26, name: "حماية شاشة زجاج مقاوم للكسر", category: "بكجات وحمايات", price: 39, oldPrice: 69, image: "screen_protector.jpg", rating: 4.7, featured: true },
    { id: 27, name: "حامل هواتف مغناطيسي للسيارة", category: "ملحقات السيارة", price: 79, oldPrice: 109, image: "car_holder.jpg", rating: 4.8, featured: true }
];


/* =====================================================
   CART STATE
===================================================== */
let cart = JSON.parse(localStorage.getItem("alatawiCart")) || [];


/* =====================================================
   DOM ELEMENTS
===================================================== */
const categoriesContainer = document.getElementById("categoriesContainer");
const offersContainer = document.getElementById("offersContainer");
const smartPhonesContainer = document.getElementById("smartPhonesContainer");
const accessoriesContainer = document.getElementById("accessoriesContainer");
const carTechContainer = document.getElementById("carTechContainer");

const cartOverlay = document.getElementById("cartOverlay");
const accountOverlay = document.getElementById("accountOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");


/* =====================================================
   DISPLAY CATEGORIES
===================================================== */
function displayCategories() {
    if (!categoriesContainer) return;
    categoriesContainer.innerHTML = "";

    categories.forEach(category => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
        `;
        card.addEventListener("click", () => {
            filterByCategory(category.name);
        });
        categoriesContainer.appendChild(card);
    });
}


/* =====================================================
   CREATE PRODUCT CARD HTML
===================================================== */
function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    const discount = product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

    card.innerHTML = `
        <div class="product-image">
            ${discount > 0 ? `<span class="discount-badge">خصم ${discount}%</span>` : ""}
            <button class="favorite-button" onclick="toggleFavorite(${product.id})">♡</button>
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/150'">
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-prices">
                ${product.oldPrice ? `<div class="old-price">${product.oldPrice.toFixed(2)} ر.س</div>` : ""}
                <div class="product-price">${product.price.toFixed(2)} ر.س</div>
            </div>
            <div class="product-rating">⭐ ${product.rating}</div>
            <button class="add-cart-button" onclick="addToCart(${product.id})">🛒 إضافة للسلة</button>
        </div>
    `;
    return card;
}


/* =====================================================
   RENDER STORE SECTIONS
===================================================== */
function renderStoreSections() {
    if (offersContainer) {
        const offers = products.filter(p => p.oldPrice && p.oldPrice > p.price);
        offersContainer.innerHTML = "";
        offers.forEach(product => {
            offersContainer.appendChild(createProductCard(product));
        });
    }

    if (smartPhonesContainer) {
        const phones = products.filter(p => p.category === "الأجهزة الذكية" || p.category === "ملحقات الألعاب");
        smartPhonesContainer.innerHTML = "";
        phones.forEach(product => {
            smartPhonesContainer.appendChild(createProductCard(product));
        });
    }

    if (accessoriesContainer) {
        const accessories = products.filter(p => p.category === "الساعات الذكية" || p.category === "الصوتيات" || p.category === "الكفرات" || p.category === "بكجات وحمايات");
        accessoriesContainer.innerHTML = "";
        accessories.forEach(product => {
            accessoriesContainer.appendChild(createProductCard(product));
        });
    }

    if (carTechContainer) {
        const carTech = products.filter(p => p.category === "الشواحن والكيابل" || p.category === "ملحقات السيارة");
        carTechContainer.innerHTML = "";
        carTech.forEach(product => {
            carTechContainer.appendChild(createProductCard(product));
        });
    }
}


/* =====================================================
   FILTER BY CATEGORY
===================================================== */
function filterByCategory(categoryName) {
    let filtered = products;
    if (categoryName !== "all") {
        if (categoryName === "عروض") {
            filtered = products.filter(p => p.oldPrice > p.price);
        } else {
            filtered = products.filter(p => p.category === categoryName);
        }
    }
    
    if (smartPhonesContainer) {
        smartPhonesContainer.innerHTML = "";
        if (filtered.length === 0) {
            smartPhonesContainer.innerHTML = "<p style='padding: 20px;'>لا توجد منتجات في هذا التصنيف حالياً.</p>";
        } else {
            filtered.forEach(product => {
                smartPhonesContainer.appendChild(createProductCard(product));
            });
            smartPhonesContainer.scrollIntoView({ behavior: "smooth" });
        }
    }
}


/* =====================================================
   CART FUNCTIONS
===================================================== */
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function changeQuantity(productId, amount) {
    const item = cart.find(product => product.id === productId);
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCart();
    }
}

function saveCart() {
    localStorage.setItem("alatawiCart", JSON.stringify(cart));
}

function updateCart() {
    if (!cartItems) return;
    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p style='text-align:center; padding:20px; color:#777;'>السلة فارغة حالياً</p>";
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;";
        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>${item.price} ر.س × ${item.quantity}</p>
            </div>
            <div>
                <button onclick="changeQuantity(${item.id}, 1)" style="padding: 2px 8px;">+</button>
                <span style="margin: 0 8px;">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, -1)" style="padding: 2px 8px;">-</button>
                <button onclick="removeFromCart(${item.id})" style="color: red; margin-right: 10px; background: none; border: none; cursor: pointer;">حذف</button>
            </div>
        `;
        cartItems.appendChild(div);
    });

    if (cartTotal) cartTotal.innerText = `${total.toFixed(2)} ر.س`;
    if (cartCount) cartCount.innerText = count;
}

function openCart() {
    if (cartOverlay) cartOverlay.classList.add("active");
}

function closeCartPanel() {
    if (cartOverlay) cartOverlay.classList.remove("active");
}

function toggleFavorite(productId) {
    alert("تمت الإضافة إلى المفضلة بنجاح! ❤️");
}


/* =====================================================
   SEARCH FUNCTIONALITY
===================================================== */
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
        );

        if (smartPhonesContainer) {
            smartPhonesContainer.innerHTML = "";
            if (filtered.length === 0) {
                smartPhonesContainer.innerHTML = "<p style='padding: 20px;'>عذراً، لم نجد منتج مطابق لبحثك.</p>";
            } else {
                filtered.forEach(product => {
                    smartPhonesContainer.appendChild(createProductCard(product));
                });
            }
        }
    });
}


/* =====================================================
   INITIALIZATION ON PAGE LOAD
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    displayCategories();
    renderStoreSections();
    updateCart();

    const cartButton = document.getElementById("cartButton");
    const closeCart = document.getElementById("closeCart");
    const accountButton = document.getElementById("accountButton");
    const closeAccount = document.getElementById("closeAccount");
    const shopButton = document.getElementById("shopButton");

    if (cartButton) cartButton.addEventListener("click", openCart);
    if (closeCart) closeCart.addEventListener("click", closeCartPanel);

    if (accountButton) {
        accountButton.addEventListener("click", () => {
            if (accountOverlay) accountOverlay.classList.add("active");
        });
    }

    if (closeAccount) {
        closeAccount.addEventListener("click", () => {
            if (accountOverlay) accountOverlay.classList.remove("active");
        });
    }

    if (shopButton && smartPhonesContainer) {
        shopButton.addEventListener("click", () => {
            smartPhonesContainer.scrollIntoView({ behavior: "smooth" });
        });
    }
});


/* =====================================================
   CUSTOMER ACCOUNT & LOGIN LOGIC
===================================================== */
const loginForm = document.getElementById("loginForm");
const registerButton = document.getElementById("registerButton");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = { email, password };
        localStorage.setItem("alatawiUser", JSON.stringify(userData));

        alert("تم تسجيل الدخول بنجاح أهلاً بك في متجر العطاوي!");
        if (accountOverlay) accountOverlay.classList.remove("active");
    });
}

if (registerButton) {
    registerButton.addEventListener("click", () => {
        const email = prompt("أدخل بريدك الإلكتروني لإنشاء حساب جديد:");
        const password = prompt("أنشئ كلمة مرور جديدة:");
        
        if (email && password) {
            const userData = { email, password };
            localStorage.setItem("alatawiUser", JSON.stringify(userData));
            alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
        }
    });
}


/* =====================================================
   CHECKOUT & EMAILJS INTEGRATION
===================================================== */
const checkoutButton = document.getElementById("checkoutButton");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");

if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("سلة المشتريات فارغة!");
            return;
        }
        if (cartOverlay) cartOverlay.classList.remove("active");
        if (checkoutOverlay) checkoutOverlay.classList.add("active");
    });
}

if (closeCheckout) {
    closeCheckout.addEventListener("click", () => {
        if (checkoutOverlay) checkoutOverlay.classList.remove("active");
    });
}

if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("clientName").value;
        const phone = document.getElementById("clientPhone").value;
        const address = document.getElementById("clientAddress").value;

        let orderDetails = cart.map(item => `- ${item.name} (الكمية: ${item.quantity}) - السعر: ${item.price * item.quantity} ر.س`).join("\n");
        let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

   
        const templateParams = {
            to_email: "ibrahim@gmail.com", 
            name: name,
            client_email: phone, 
            client_phone: phone,
            client_address: address,
            order_items: orderDetails,
            total_amount: totalPrice + " ر.س",
            message: `بيانات العميل:\nالاسم: ${name}\nالهاتف: ${phone}\nالعنوان: ${address}\n\nالطلبات:\n${orderDetails}\n\nالإجمالي: ${totalPrice} ر.س`
        };

        const submitBtn = checkoutForm.querySelector("button[type='submit']");
        submitBtn.innerText = "جاري إرسال الطلب...";
        submitBtn.disabled = true;

       emailjs.send("service_ak9x10p", "template_frbxkcq", templateParams, "hZOtizjBJy0CczBmn")
            .then((response) => {
                alert("🎉 تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الشحن.");
                cart = [];
                saveCart();
                updateCart();
                checkoutOverlay.classList.remove("active");
                checkoutForm.reset();
                submitBtn.innerText = "تأكيد وإرسال الطلب عبر البريد";
                submitBtn.disabled = false;
            }, (error) => {
                console.error("EmailJS Error details:", error);
                alert("خطأ EmailJS: " + JSON.stringify(error)); // هذا السطر سيطبع لنا السبب الحقيقي على الشاشة
                submitBtn.innerText = "تأكيد وإرسال الطلب عبر البريد";
                submitBtn.disabled = false;
            });
    });
}
