document.addEventListener('DOMContentLoaded', () =>{
    const products =[
        {id: 1, name: 'Produto 1', price: 20.00, imagem: 'https://th.bing.com/th/id/OIP.NOqWXdGzJHXfGOTPbaf4bgHaEJ?rs=1&pid=ImgDetMain' },
        {id: 2, name: 'Produto 2', price: 20.00, imagem: 'https://th.bing.com/th/id/OIP.NOqWXdGzJHXfGOTPbaf4bgHaEJ?rs=1&pid=ImgDetMain'},
        {id: 3, name: 'Produto 3', price: 20.00, imagem: 'https://th.bing.com/th/id/OIP.NOqWXdGzJHXfGOTPbaf4bgHaEJ?rs=1&pid=ImgDetMain'},
        {id: 4, name: 'Produto 4', price: 20.00, imagem: 'https://th.bing.com/th/id/OIP.NOqWXdGzJHXfGOTPbaf4bgHaEJ?rs=1&pid=ImgDetMain'}
    ];

const productsContainer = document.getElementById('products');
const notificationContainer = document.getElementById('notification-container');

products.forEach(product =>{
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML =`
    <h2>${product.name}</h2>
    <img src="${product.imagem}" alt="${product.name}">
    <p>Preço: R$${product.price.toFixed(2)}</p>
    <button>Adicionar ao carrinho</button>`;

    productDiv.querySelector('button').addEventListener('click', () => {
        const notificationElement = document.createElement('div');
            notificationElement.className =' notification show';
            notificationElement.textContent = `${product.name} adicionado ao carrinho com sucesso!`;
            
            notificationContainer.appendChild(notificationElement);
            
            setTimeout(() => {
                notificationElement.classList.remove('show');
                notificationContainer.removeChild(notificationElement);
            }, 3000);
    
    });

        
    productDiv.addEventListener('click', () => {
        console.log(`Você clicou em ${product.name}`);
    });


    productsContainer.appendChild(productDiv);
    });


});