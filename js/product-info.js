(function () {
    const product = JSON.parse(localStorage.product);
    
    const productsContainer = document.querySelector('.product');
    productsContainer.innerHTML = `
     <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <h3>${product.price}</h3>
        <div class="buttons">
            <a href="product-info.html"><button type="button" class="btn btn-warning product-info-button" data-id="${product.id}">${product.price}Buy Now</button></a>  
           </div>`;

})();