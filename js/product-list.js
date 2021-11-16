(function () {
    const products = [
        {
            id: "1",
            title: 'Blossom Honey',
            price: 20.00,
            image: 'https://e-c.storage.googleapis.com/res/914e3e5a-d609-4583-a5ff-ae4eb1f51de6/480'

        },
         {
            id: "2",
            title: 'Wildflower Honey',
            price: 7.00,
            image: 'https://e-c.storage.googleapis.com/res/918ca63b-4dfd-4566-b4c4-778b3c11ba8f/480'

        },
        {
            id: "3",
            title: 'Buckwheat Honey',
            price: 10.00,
            image: 'https://e-c.storage.googleapis.com/res/fa81d094-07ef-45eb-a2d9-87f32095d63b/480'

        },
        {
            id: "4",
            title: 'Citrus Blossom Honey',
            price: 15.00,
            image: 'https://e-c.storage.googleapis.com/res/3bdacc57-efd4-458c-b3c1-040af158592e/480'

        }

    ];
    function renderProducts(products) {
        const productsContainer = document.querySelector('.block');
        for (const product of products) {
            productsContainer.innerHTML += `
            <article>
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <h3>${product.price}</h3>
        <div class="buttons">
            <a href="product-info.html"><button type="button" class="btn btn-warning product-info-button" data-id="${product.id}">${product.price}Buy Now</button></a>  
           </div>
    </article>
            `;
        }
        document.querySelectorAll('.product-info-button')
            .forEach(infoButton => infoButton.addEventListener('click', productInfoClick));

    }
    function productInfoClick(ev) {
        const productInfoButton = ev.target;
        const productId = productInfoButton.dataset.id;
        const product = products.filter(product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
        
    }
    renderProducts(products);   
})();