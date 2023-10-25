document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('tbody');
    const totalPriceDisplay = document.querySelector('.price-total span');

    // Hàm để hiển thị sản phẩm trong giỏ hàng
    function displayCartItems() {
        cartTableBody.innerHTML = '';
        let totalPrice = 0;
        cartItems.forEach((item, index) => {
            const row = document.createElement('tr');
            const price = parseFloat(item.price);
            const quantity = item.quantity || 1; //so sanh số lượng với 1
            const totalItemPrice = price * quantity;

            row.innerHTML = `
                <td style="display: flex;align-items: center;"><img style="width: 70px;" src="${item.image}" alt=""></td>
                <td><p><span>${price}</span> <sup>đ</sup></p></td>
                <td><p style="text-align: center">${item.name}</p></td>
                <td><input style="width: 30px;outline: none; text-align: left;border-raius: 10px" type="number" value="${quantity}" min="1" data-index="${index}" class="quantity-input"></td>
                <td><button class="delete-btn" data-index="${index}"> Xóa</button></td>
            `;
            cartTableBody.appendChild(row);
            totalPrice += totalItemPrice;
        });
        totalPriceDisplay.textContent = totalPrice.toFixed(2);//làm tròn chữ số thập phân dến 2 chữ số
    }
    
});
displayCartItems();
