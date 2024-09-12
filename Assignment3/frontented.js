document.addEventListener('DOMContentLoaded', function() {
    const productsdiv = document.getElementById('product_list');
    productsdiv.className = 'products';
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productdiv = document.createElement('div');
            productdiv.className = 'product';
            productdiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <p>Category: ${product.category}</p>

            `;
            productsdiv.appendChild(productdiv);
        });
    });

});