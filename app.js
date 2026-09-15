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

    {
        id: 1,

        name: "سماعة رأس بلوتوث لاسلكية",

        category: "الصوتيات",

        price: 79,

        oldPrice: 129,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/5f98bdab-d29e-429c-ba58-a9c949fa39a5.jpeg",

        rating: 4.8,

        featured: true
    },


    {
        id: 2,

        name: "ميكروفون لاسلكي للايفون",

        category: "الصوتيات",

        price: 89,

        oldPrice: 149,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/baa479de-ca5e-4372-9379-d1916dfd9c40.webp",

        rating: 4.7,

        featured: true
    },


    {
        id: 3,

        name: "سماعات أذن لاسلكية",

        category: "الصوتيات",

        price: 49,

        oldPrice: 99,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/4704401a-ebb3-4212-962d-cf18d1c83589.webp",

        rating: 4.6,

        featured: true
    },


    {
        id: 4,

        name: "شاحن سيارة سريع 53W",

        category: "الشواحن والكيابل",

        price: 39,

        oldPrice: 69,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/88de4323-092e-4b2c-aa1d-3192c5f0fe82.jpg",

        rating: 4.5,

        featured: true
    },


    {
        id: 5,

        name: "حامل جوال مغناطيسي للسيارة",

        category: "ملحقات السيارة",

        price: 29,

        oldPrice: 59,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/3c2ddf0e-44af-496a-8ccf-7aabb24c7334.jpeg",

        rating: 4.5,

        featured: true
    },


    {
        id: 6,

        name: "حامل جوال ماج سيف",

        category: "الاستاندات",

        price: 35,

        oldPrice: 69,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/5e528dcc-ed89-49ca-842e-fa9b96ce8f0e.jpeg",

        rating: 4.4,

        featured: true
    },


    {
        id: 7,

        name: "حماية شاشة للجوال",

        category: "بكجات وحمايات",

        price: 9,

        oldPrice: 29,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/1db18922-3138-40fe-9d17-cac927fb39aa.jpg",

        rating: 4.4,

        featured: true
    },


    {
        id: 8,

        name: "كفر حماية للايفون",

        category: "الكفرات",

        price: 19,

        oldPrice: 49,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/5e528dcc-ed89-49ca-842e-fa9b96ce8f0e.jpeg",

        rating: 4.7,

        featured: true
    },


    {
        id: 9,

        name: "ساعة ذكية رياضية",

        category: "الساعات الذكية",

        price: 149,

        oldPrice: 249,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/7352f257-8cdc-4807-9d5c-65e30b5870e2.jpeg",

        rating: 4.6,

        featured: true
    },


    {
        id: 10,

        name: "جهاز سامسونج Galaxy S25 FE",

        category: "الأجهزة الذكية",

        price: 2099,

        oldPrice: 2499,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/3c93bcba-4219-4148-a3a1-249101f66649.jpeg",

        rating: 4.9,

        featured: true
    },


    {
        id: 11,

        name: "جهاز لوحي 10.1 بوصة",

        category: "الأجهزة الذكية",

        price: 599,

        oldPrice: 699,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/4704401a-ebb3-4212-962d-cf18d1c83589.webp",

        rating: 4.5,

        featured: false
    },


    {
        id: 12,

        name: "توصيلة كهربائية سريعة",

        category: "الشواحن والكيابل",

        price: 59,

        oldPrice: 99,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71bb709.jpeg",

        rating: 4.4,

        featured: false
    },


    {
        id: 13,

        name: "كفر حماية مع حماية شاشة",

        category: "الكفرات",

        price: 9,

        oldPrice: 39,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/b5115a29-ddd5-45f2-a884-2c3ba5523991.jpeg",

        rating: 4.3,

        featured: true
    },


    {
        id: 14,

        name: "حامل جوال تلسكوبي",

        category: "الاستاندات",

        price: 49,

        oldPrice: 99,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/0c9be404-c2e9-4824-8470-2f81f0d3f3d7.jpg",

        rating: 4.4,

        featured: false
    },


    {
        id: 15,

        name: "سماعة لاسلكية متطورة",

        category: "الصوتيات",

        price: 199,

        oldPrice: 299,

        image:
            "https://media.zid.store/68dc0966-9708-4c53-81d0-0cce7c71d8bf/88de4323-092e-4b2c-aa1d-3192c5f0fe82.jpg",

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
