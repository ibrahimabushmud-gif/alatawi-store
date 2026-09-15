/* =====================================================
   ALATAWI STORE
   Main JavaScript
===================================================== */


/* =====================================================
   CATEGORIES
===================================================== */

const categories = [

    {
        name: "الأجهزة الذكية",
        icon: "📱"
    },

    {
        name: "الكفرات",
        icon: "🛡️"
    },

    {
        name: "الشواحن والكيابل",
        icon: "🔌"
    },

    {
        name: "الصوتيات",
        icon: "🎧"
    },

    {
        name: "الساعات الذكية",
        icon: "⌚"
    },

    {
        name: "ملحقات السيارة",
        icon: "🚗"
    },

    {
        name: "ملحقات الألعاب",
        icon: "🎮"
    },

    {
        name: "كاميرات المراقبة",
        icon: "📷"
    },

    {
        name: "الحاسب الآلي",
        icon: "💻"
    },

    {
        name: "الاستاندات",
        icon: "📱"
    },

    {
        name: "بكجات وحمايات",
        icon: "✨"
    },

    {
        name: "عروض",
        icon: "🔥"
    }

];



/* =====================================================
   PRODUCTS
===================================================== */
const products = [

    // =========================
    // iPhone
    // =========================

    {
        id: 1,
        name: "iPhone 12",
        category: "الأجهزة الذكية",
        price: 1499,
        oldPrice: 1699,
        image: "iphone12.jpg",
        rating: 4.8,
        featured: true
    },

    {
        id: 2,
        name: "iPhone 12 Pro Max",
        category: "الأجهزة الذكية",
        price: 1899,
        oldPrice: 2099,
        image: "iphone12_promax.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 3,
        name: "iPhone 15 Pro Max",
        category: "الأجهزة الذكية",
        price: 3499,
        oldPrice: 3799,
        image: "iphone15_promax.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 4,
        name: "iPhone 16 Pro Max",
        category: "الأجهزة الذكية",
        price: 3999,
        oldPrice: 4299,
        image: "iphone16_promax.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 5,
        name: "iPhone 17 Pro",
        category: "الأجهزة الذكية",
        price: 4299,
        oldPrice: 4599,
        image: "iphone17_pro.jpeg",
        rating: 5.0,
        featured: true
    },

    {
        id: 6,
        name: "iPhone 17 Pro Max",
        category: "الأجهزة الذكية",
        price: 4699,
        oldPrice: 4999,
        image: "iphone17_promax.jpeg",
        rating: 5.0,
        featured: true
    },


    // =========================
    // Samsung Galaxy Ultra
    // =========================

    {
        id: 7,
        name: "Samsung Galaxy S22 Ultra",
        category: "الأجهزة الذكية",
        price: 2299,
        oldPrice: 2599,
        image: "64365.jpeg",
        rating: 4.7,
        featured: true
    },

    {
        id: 8,
        name: "Samsung Galaxy S23 Ultra",
        category: "الأجهزة الذكية",
        price: 2799,
        oldPrice: 3199,
        image: "64366.jpeg",
        rating: 4.8,
        featured: true
    },

    {
        id: 9,
        name: "Samsung Galaxy S24 Ultra",
        category: "الأجهزة الذكية",
        price: 3299,
        oldPrice: 3699,
        image: "64367.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 10,
        name: "Samsung Galaxy S25 Ultra",
        category: "الأجهزة الذكية",
        price: 3899,
        oldPrice: 4299,
        image: "64368.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 11,
        name: "Samsung Galaxy S26 Ultra",
        category: "الأجهزة الذكية",
        price: 4499,
        oldPrice: 4799,
        image: "64369.jpeg",
        rating: 5.0,
        featured: true
    },


    // =========================
    // Xiaomi
    // =========================

    {
        id: 12,
        name: "Xiaomi Titanium Series",
        category: "الأجهزة الذكية",
        price: 2999,
        oldPrice: 3299,
        image: "64371.jpeg",
        rating: 4.8,
        featured: true
    },

    {
        id: 13,
        name: "Xiaomi Flagship Leica",
        category: "الأجهزة الذكية",
        price: 3199,
        oldPrice: 3499,
        image: "64372.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 14,
        name: "Xiaomi Smart Clock Edition",
        category: "الأجهزة الذكية",
        price: 2499,
        oldPrice: 2799,
        image: "64373.jpeg",
        rating: 4.7,
        featured: true
    },


    // =========================
    // Red Magic
    // =========================

    {
        id: 15,
        name: "Red Magic White Edition",
        category: "ملحقات الألعاب",
        price: 2799,
        oldPrice: 3099,
        image: "64374.jpeg",
        rating: 4.8,
        featured: true
    },

    {
        id: 16,
        name: "Red Magic Ultra Gaming",
        category: "ملحقات الألعاب",
        price: 2999,
        oldPrice: 3299,
        image: "64375.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 17,
        name: "Red Magic Cyber Black",
        category: "ملحقات الألعاب",
        price: 3199,
        oldPrice: 3499,
        image: "64376.jpeg",
        rating: 4.9,
        featured: true
    },

    {
        id: 18,
        name: "Red Magic Pro Transparent",
        category: "ملحقات الألعاب",
        price: 3399,
        oldPrice: 3699,
        image: "64377.jpeg",
        rating: 5.0,
        featured: true
    },


    // =========================
    // Apple Accessories
    // =========================

    {
        id: 19,
        name: "AirPods Pro 2 USB-C",
        category: "الصوتيات",
        price: 799,
        oldPrice: 899,
        image: "airpods_pro_2.jpg",
        rating: 4.9,
        featured: true
    },

    {
        id: 20,
        name: "AirPods Max",
        category: "الصوتيات",
        price: 1899,
        oldPrice: 2099,
        image: "airpods_max.jpg",
        rating: 4.8,
        featured: true
    },

    {
        id: 21,
        name: "Apple Watch Ultra 2",
        category: "الساعات الذكية",
        price: 2899,
        oldPrice: 3199,
        image: "apple_watch_ultra_2.jpg",
        rating: 4.9,
        featured: true
    },

    {
        id: 22,
        name: "Apple Watch Series 9",
        category: "الساعات الذكية",
        price: 1499,
        oldPrice: 1699,
        image: "apple_watch_series_9.jpg",
        rating: 4.8,
        featured: true
    },


    // =========================
    // Chargers
    // =========================

    {
        id: 23,
        name: "شاحن أبل سريع 20W",
        category: "الشواحن والكيابل",
        price: 89,
        oldPrice: 119,
        image: "apple_charger_20w.jpg",
        rating: 4.8,
        featured: true
    },

    {
        id: 24,
        name: "Anker MagGo 10000",
        category: "الشواحن والكيابل",
        price: 249,
        oldPrice: 299,
        image: "anker_maggo_10000.jpg",
        rating: 4.8,
        featured: true
    },


    // =========================
    // Accessories
    // =========================

    {
        id: 25,
        name: "كفر حماية شفاف مضاد للصدمات",
        category: "الكفرات",
        price: 59,
        oldPrice: 89,
        image: "clear_case.jpg",
        rating: 4.7,
        featured: true
    },

    {
        id: 26,
        name: "حماية شاشة زجاج مقاوم للكسر",
        category: "بكجات وحمايات",
        price: 39,
        oldPrice: 69,
        image: "screen_protector.jpg",
        rating: 4.7,
        featured: true
    },

    {
        id: 27,
        name: "حامل هواتف مغناطيسي للسيارة",
        category: "ملحقات السيارة",
        price: 79,
        oldPrice: 109,
        image: "car_holder.jpg",
        rating: 4.8,
        featured: true
    }

];


/* =====================================================
   CART
===================================================== */

let cart = JSON.parse(
    localStorage.getItem("alatawiCart")
) || [];



/* =====================================================
   DOM ELEMENTS
===================================================== */

const productsContainer =
    document.getElementById("productsContainer");

const offersContainer =
    document.getElementById("offersContainer");

const categoriesContainer =
    document.getElementById("categoriesContainer");

const cartOverlay =
    document.getElementById("cartOverlay");

const accountOverlay =
    document.getElementById("accountOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const searchInput =
    document.getElementById("searchInput");

const sortProducts =
    document.getElementById("sortProducts");

const noProducts =
    document.getElementById("noProducts");



/* =====================================================
   CURRENT CATEGORY
===================================================== */

let currentCategory = "all";



/* =====================================================
   DISPLAY CATEGORIES
===================================================== */

function displayCategories() {

    categoriesContainer.innerHTML = "";

    categories.forEach(category => {

        const card =
            document.createElement("div");

        card.className = "category-card";

        card.innerHTML = `

            <div class="category-icon">
                ${category.icon}
            </div>

            <h3>
                ${category.name}
            </h3>

        `;

        card.addEventListener("click", () => {

            filterCategory(category.name);

        });

        categoriesContainer.appendChild(card);

    });

}



/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list = products) {

    productsContainer.innerHTML = "";

    if (list.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    list.forEach(product => {

        productsContainer.appendChild(
            createProductCard(product)
        );

    });

}



/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const card =
        document.createElement("article");

    card.className = "product-card";


    const discount =
        product.oldPrice
            ? Math.round(
                ((product.oldPrice - product.price)
                    / product.oldPrice) * 100
            )
            : 0;


    card.innerHTML = `

        <div class="product-image">

            ${
                discount > 0
                ?
                `
                <span class="discount-badge">
                    خصم ${discount}%
                </span>
                `
                :
                ""
            }

            <button
                class="favorite-button"
                onclick="toggleFavorite(${product.id})"
            >
                ♡
            </button>

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

        </div>


        <div class="product-info">

            <div class="product-category">
                ${product.category}
            </div>


            <h3 class="product-title">
                ${product.name}
            </h3>


            <div class="product-prices">

                ${
                    product.oldPrice
                    ?
                    `
                    <div class="old-price">
                        ${product.oldPrice.toFixed(2)}
                        ر.س
                    </div>
                    `
                    :
                    ""
                }


                <div class="product-price">

                    ${product.price.toFixed(2)}

                    ر.س

                </div>

            </div>


            <div class="product-rating">

                ⭐ ${product.rating}

            </div>


            <button
                class="add-cart-button"
                onclick="addToCart(${product.id})"
            >

                🛒 إضافة للسلة

            </button>

        </div>

    `;


    return card;

}



/* =====================================================
   DISPLAY OFFERS
===================================================== */

function displayOffers() {

    const offers =
        products
            .filter(product =>
                product.oldPrice &&
                product.oldPrice > product.price
            )
            .slice(0, 5);


    offersContainer.innerHTML = "";


    offers.forEach(product => {

        offersContainer.appendChild(
            createProductCard(product)
        );

    });

}



/* =====================================================
   FILTER CATEGORY
===================================================== */

function filterCategory(category) {

    currentCategory = category;


    let filtered;


    if (category === "all") {

        filtered = products;

    }

    else if (category === "عروض") {

        filtered =
            products.filter(product =>
                product.oldPrice > product.price
            );

    }

    else {

        filtered =
            products.filter(product =>
                product.category === category
            );

    }


    displayProducts(filtered);


    document
        .getElementById("productsSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    let filtered =
        products.filter(product => {

            const name =
                product.name.toLowerCase();

            const category =
                product.category.toLowerCase();


            return (
                name.includes(search) ||
                category.includes(search)
            );

        });


    if (currentCategory !== "all") {

        if (currentCategory === "عروض") {

            filtered =
                filtered.filter(product =>
                    product.oldPrice > product.price
                );

        }

        else {

            filtered =
                filtered.filter(product =>
                    product.category === currentCategory
                );

        }

    }


    displayProducts(filtered);

}



/* =====================================================
   SORT PRODUCTS
===================================================== */

function sortProductList() {

    let list = [...products];


    if (currentCategory !== "all") {

        if (currentCategory === "عروض") {

            list =
                list.filter(product =>
                    product.oldPrice > product.price
                );

        }

        else {

            list =
                list.filter(product =>
                    product.category === currentCategory
                );

        }

    }


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    if (search) {

        list =
            list.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(search)

            );

    }


    switch (sortProducts.value) {

        case "low":

            list.sort(
                (a, b) =>
                    a.price - b.price
            );

            break;


        case "high":

            list.sort(
                (a, b) =>
                    b.price - a.price
            );

            break;


        case "discount":

            list.sort((a, b) => {

                const discountA =
                    a.oldPrice
                        ? (a.oldPrice - a.price)
                            / a.oldPrice
                        : 0;


                const discountB =
                    b.oldPrice
                        ? (b.oldPrice - b.price)
                            / b.oldPrice
                        : 0;


                return discountB - discountA;

            });

            break;

    }


    displayProducts(list);

}



/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity += 1;

    }

    else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    openCart();

}



/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );


    saveCart();

    updateCart();

}



/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(productId, amount) {

    const item =
        cart.find(
            product => product.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    updateCart();

}



/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div style="font-size:50px;">
                    🛒
                </div>

                <h3>
                    السلة فارغة
                </h3>

                <p>
                    أضف المنتجات التي تريد شراءها.
                </p>

            </div>

        `;

        cartTotal.textContent =
            "0.00 ر.س";

        cartCount.textContent = "0";

        return;

    }


    let total = 0;

    let quantityTotal = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;


        quantityTotal +=
            item.quantity;


        const row =
            document.createElement("div");

        row.className = "cart-item";


        row.innerHTML = `

            <img
                class="cart-item-image"
                src="${item.image}"
                alt="${item.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>


                <div class="cart-item-price">

                    ${item.price.toFixed(2)}
                    ر.س

                </div>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            -1
                        )"
                    >
                        -
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(
                        ${item.id}
                    )"
                >

                    حذف المنتج

                </button>

            </div>

        `;


        cartItems.appendChild(row);

    });


    cartTotal.textContent =
        total.toFixed(2) + " ر.س";


    cartCount.textContent =
        quantityTotal;

}



/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "alatawiCart",
        JSON.stringify(cart)
    );

}



/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    cartOverlay.classList.add("active");

}



/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    cartOverlay.classList.remove("active");

}



/* =====================================================
   OPEN ACCOUNT
===================================================== */

function openAccount() {

    accountOverlay.classList.add("active");

}



/* =====================================================
   CLOSE ACCOUNT
===================================================== */

function closeAccount() {

    accountOverlay.classList.remove("active");

}



/* =====================================================
   FAVORITE
===================================================== */

function toggleFavorite(productId) {

    const favorites =
        JSON.parse(
            localStorage.getItem(
                "alatawiFavorites"
            )
        ) || [];


    if (favorites.includes(productId)) {

        const index =
            favorites.indexOf(productId);

        favorites.splice(index, 1);

        alert("تم حذف المنتج من المفضلة");

    }

    else {

        favorites.push(productId);

        alert("تمت إضافة المنتج إلى المفضلة");

    }


    localStorage.setItem(
        "alatawiFavorites",
        JSON.stringify(favorites)
    );

}



/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "السلة فارغة، أضف منتجاً أولاً."
        );

        return;

    }


    alert(
        "صفحة الدفع سيتم ربطها في المرحلة القادمة."
    );

}



/* =====================================================
   LOGIN
===================================================== */

function login(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "email"
        ).value;


    const password =
        document.getElementById(
            "password"
        ).value;


    if (!email || !password) {

        alert(
            "يرجى إدخال البريد وكلمة المرور."
        );

        return;

    }


    alert(
        "تم تسجيل الدخول تجريبياً."
    );


    closeAccount();

}



/* =====================================================
   NAVIGATION
===================================================== */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            "[data-category]"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const category =
                    link.dataset.category;


                filterCategory(category);

            }
        );

    });

}



/* =====================================================
   EVENTS
===================================================== */

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById("accountButton")
    .addEventListener(
        "click",
        openAccount
    );


document
    .getElementById("closeAccount")
    .addEventListener(
        "click",
        closeAccount
    );


document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        checkout
    );


document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        searchProducts
    );


document
    .getElementById("searchButton")
    .addEventListener(
        "click",
        searchProducts
    );


sortProducts
    .addEventListener(
        "change",
        sortProductList
    );


document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        login
    );


document
    .getElementById("shopButton")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("productsSection")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );



/* =====================================================
   START STORE
===================================================== */

displayCategories();

displayProducts();

displayOffers();

updateCart();

setupNavigation();
