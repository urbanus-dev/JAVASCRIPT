let addedDataJSON = [];
let cart = [];

async function addProducts() {
    try {
        const response = await fetch('http://localhost:3000/cartData');
        const data = await response.json();
        addedDataJSON = data;
        populateProducts();
        updateCartSummary();
    } catch (error) {
        console.log(`Error while fetching products: ${error}`);
    }
}

function populateProducts() {
    const contents_display = document.getElementById('contents');
    contents_display.innerHTML = '';

    addedDataJSON.forEach(product => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('data_elements');
        contentDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h4>${product.title}</h4>
            <h4>ksh.${product.price}</h4>
            <p>${product.date}</p>
            <p>${product.location}</p>
            <h4>${product.company}</h4>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        contents_display.appendChild(contentDiv);
    });
}

function addToCart(id) {
    const product = addedDataJSON.find(item => item.id === String(id));
    if (product) {
        const cartItem = cart.find(item => item.id === String(id));
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        alert(`${product.title} added to cart!`);
        updateCartSummary();
    } else {
        alert(`Product not found.`);
    }
}

function deleteFromCart(id) {
    cart = cart.filter(product => product.id !== String(id));
    updateCartUI();
    updateCartSummary();
}

function updateCartUI() {
    const contents_display = document.getElementById('contents');
    contents_display.innerHTML = '';

    if (cart.length === 0) {
        populateProducts();
        return;
    }

    cart.forEach(product => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('data_elements');
        contentDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h4>${product.title}</h4>
            <h4>ksh.${product.price}</h4>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="deleteFromCart(${product.id})">Delete from Cart</button>
            <button onclick="increaseQuantity(${product.id})">+</button>
            <button onclick="decreaseQuantity(${product.id})">-</button>
            <button onclick="showEditQuantityDialog(${product.id})">Edit Quantity</button>
        `;
        contents_display.appendChild(contentDiv);
    });
}

function increaseQuantity(id) {
    const product = cart.find(item => item.id === String(id));
    if (product) {
        product.quantity += 1;
        updateCartUI();
        updateCartSummary();
    } else {
        alert(`Product not found.`);
    }
}

function decreaseQuantity(id) {
    const product = cart.find(item => item.id === String(id));
    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            deleteFromCart(id);
        }
        updateCartUI();
        updateCartSummary();
    } else {
        alert(`Product not found.`);
    }
}

function showEditQuantityDialog(id) {
    const product = cart.find(item => item.id === String(id));
    if (product) {
        const newQuantity = prompt(`Edit quantity for ${product.title}:`, product.quantity);
        if (newQuantity !== null) {
            const quantity = parseInt(newQuantity, 10);
            if (!isNaN(quantity) && quantity > 0) {
                editProductInCart(id, quantity);
            } else {
                alert("Please enter a valid quantity.");
            }
        }
    } else {
        alert(`Product not found.`);
    }
}

function editProductInCart(id, newQuantity) {
    const product = cart.find(item => item.id === String(id));
    if (product) {
        product.quantity = newQuantity;
        updateCartUI();
        updateCartSummary();
    } else {
        alert(`Product not found.`);
    }
}

function updateCartSummary() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = `Total Items in Cart: ${cart.length}`;

    const cartTotal = document.getElementById('cartTotals');
    cartTotal.innerHTML = `Total Price: ksh.${cart.reduce((total, product) => total + (product.price * product.quantity), 0)}`;
}

const cartButton = document.getElementById('cartButton');
cartButton.addEventListener('click', updateCartUI);

addProducts();
