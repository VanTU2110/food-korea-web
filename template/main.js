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
    displayCartItems();

    // Lấy tất cả nút "Thêm vào giỏ hàng"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Lắng nghe sự kiện click cho từng nút "Thêm vào giỏ hàng"
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = {
                image: document.querySelectorAll('.product img')[index].src,
                name: document.querySelectorAll('.product h3')[index].innerText,
                price: document.querySelectorAll('.product p span')[index].innerText,
                quantity: 1,
            };

            let isDuplicate = false; //biến theo dõi xem có sự trùng lặp nào kh
            cartItems.forEach((item) => {
                if (item.name === product.name) {
                    item.quantity++;
                    isDuplicate = true;
                }
            });

            if (!isDuplicate) {
                cartItems.push(product);// không lặp thì thêm vào giỏ hàng
            }

            localStorage.setItem('cart', JSON.stringify(cartItems));
            displayCartItems();
            //salert("Da them san pham vao gio hang")
        });
    });

    // Lắng nghe sự kiện thay đổi số lượng
    cartTableBody.addEventListener('input', (event) => {//sự kiện thay đổi số lượng ở ô input
        if (event.target.classList.contains('quantity-input')) {//kiểm tra xem ng dùng có tương tác với lớp quantity-input không

            const index = event.target.getAttribute('data-index');//Lấy giá trị của thuộc tính 'data-index' từ phần tử mục tiêu mà sự kiện được kích hoạt. 
            cartItems[index].quantity = event.target.value;//Gán giá trị của phần tử input mà người dùng đã thay đổi vào thuộc tính 'quantity' của phần tử tương ứng trong mảng cartItems. Điều này giả định rằng cartItems là một mảng chứa các mục trong giỏ hàng.
            localStorage.setItem('cart', JSON.stringify(cartItems));
            displayCartItems();
        }
    });

    // Lắng nghe sự kiện click cho nút "Xóa"
    cartTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            displayCartItems();
        }
    });

    displayCartItems();
});


//hiển thị giỏ hàng
const cartbtn = document.querySelector(".fa-circle-xmark")
const cardShow = document.querySelector(".fa-cart-shopping")
console.log(cartbtn)
console.log(cardShow)
cardShow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%"
})


document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(orderForm);
        const customerDetails = {};
        formData.forEach(function(value, key) {
            customerDetails[key] = value;
        });
        const orderDetails = {
            customer: customerDetails,
            items: cartItems,
        };
        // Điều này có thể được thay thế bằng phương thức lưu trữ hoặc gửi dữ liệu đơn hàng
        console.log(orderDetails);
        // Sau khi chốt đơn, bạn có thể xóa giỏ hàng
        localStorage.removeItem('cart');
        // Thực hiện các hành động khác sau khi chốt đơn
        // Ví dụ: Hiển thị thông báo thành công, chuyển hướng đến trang cảm ơn, vv.
    });
});

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length 

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400// Tăng giá trị của translateY xuống 400 đơn vị (di chuyển lên trên).
  comment.style.transform = `translateY(${translateY}px)`// Thiết lập thuộc tính transform của phần tử comment để di chuyển nội dung lên hoặc xuống dựa trên giá trị của translateY.
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

document.addEventListener('DOMContentLoaded',function(){
    const btnChotdon = document.getElementById('btnChotdon')
    btnChotdon.addEventListener('click',function(event){
        event.preventDefault()
        window.location.href="../template/Thanhtoan.html"
    })
})