document.addEventListener('DOMContentLoaded', () =>{
    const products =[
        {id: 1, name: 'Produto 1', price: 10.00, imagem: 'https://via.placeholder.com/150' },
        {id: 2, name: 'Produto 2', price: 20.00, imagem: 'https://via.placeholder.com/150'}
    ];

const productsContainer = document.getElementById('products');

products.forEach(product =>{
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML =`
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Preço: R$${product.price.toFixed(2)}</p>
    <button>Comprar</button>'`;

    productsContainer.appendChild(productDiv);
    });
});