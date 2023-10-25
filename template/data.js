// main.js
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        // Truy cập thông tin sản phẩm và hiển thị lên trang web
        data.products.forEach(product => {
            localStorage.setItem('productData', JSON.stringify(data.products));
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            
                <h2 style=" font-size: 18px;color: #333;">${product.name}</h2>
                <p style="font-size: 14px;color: #666;">ID: ${product.id}</p>
                <img style="max-width: 100%;
                height: auto;
                display: block;
                margin-top: 10px; border-radius :0.5rem;"  src="${product.img_url}" alt="${product.name}" width="500">
                <p>${product.description}</p>
                <p>Giá: ${product.price}</p> 
            `;
            productList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Lỗi: ' + error));
   