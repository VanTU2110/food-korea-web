// Xử lý sự kiện khi bấm vào menu "Tài khoản"
var dashboardMenu = document.querySelector('.sidebar-menu li:nth-child(1) a'); // Thay đổi chỉ mục (index) nếu cần
var accountMenu = document.querySelector('.sidebar-menu li:nth-child(2) a'); // Thay đổi chỉ mục (index) nếu cần
var producttMenu = document.querySelector('.sidebar-menu li:nth-child(3) a'); // Thay đổi chỉ mục (index) nếu cần
var productAddMenu = document.querySelector('.sidebar-menu li:nth-child(4) a'); // Thay đổi chỉ mục (index) nếu cần
var inventoryMenu = document.querySelector('.sidebar-menu li:nth-child(5) a'); // Thay đổi chỉ mục (index) nếu cần
var logout = document.querySelector('.sidebar-menu li:nth-child(6) a'); // Thay đổi chỉ mục (index) nếu cần

// sellect element display and hide
var accountContent = document.getElementById('account-content');
var productOder = document.getElementById('product-oder-content');
var addProduct = document.getElementById('add-product');
var invent = document.getElementById('inventory');
var hiddenContent = document.querySelector('main');

// ----------------
accountMenu.addEventListener('click', hide);
producttMenu.addEventListener('click', hide1);
productAddMenu.addEventListener('click', hide2);
logout.addEventListener('click', lgout);
dashboardMenu.addEventListener('click', hide0);
logout.addEventListener('click', lgout);
inventoryMenu.addEventListener('click', hide3);
function hide(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)
    accountContent.style.display = 'block';
    hiddenContent.style.display = 'none';
    productOder.style.display = 'none';
    addProduct.style.display = 'none';
    invent.style.display = 'none';
}
function hide0(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)
    accountContent.style.display = 'none';
    hiddenContent.style.display = 'block'
    productOder.style.display = 'none';
    addProduct.style.display = 'none';
    invent.style.display = 'none';

}
function hide1(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)
    accountContent.style.display = 'none';
    hiddenContent.style.display = 'none';
    productOder.style.display = 'block';
    addProduct.style.display = 'none';
    invent.style.display = 'none';

}

function hide2(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)
    accountContent.style.display = 'none';
    hiddenContent.style.display = 'none';
    productOder.style.display = 'none';
    addProduct.style.display = 'block';
    invent.style.display = 'none';
}

function hide3(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)
    accountContent.style.display = 'none';
    hiddenContent.style.display = 'none';
    productOder.style.display = 'none';
    addProduct.style.display = 'none';
    invent.style.display = 'block';
}

function lgout(event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5502/login.html";
}
// -------------------them sản phẩm, lưu vào web location
//// Lắng nghe sự kiện thay đổi của input file
// Khai báo biến công khai để lưu giá trị src của hình ảnh
var selectedImageSrc;

var imageInput = document.getElementById('image');
imageInput.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var imagePreview = document.getElementById('image-preview');
        imagePreview.src = e.target.result;
        // Gán giá trị src vào biến selectedImageSrc
        selectedImageSrc = imagePreview.src;
    };
    reader.readAsDataURL(file);
});

// Sử dụng biến selectedImageSrc ở bất kỳ đâu trong phạm vi có thể truy cập được

document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy giá trị từ các trường nhập liệu
    var order = document.getElementById("order").value;
    var image = document.getElementById("image").value;
    var name = document.getElementById("name").value;
    var code = document.getElementById("code").value;
    var quantity = document.getElementById("quantity").value;
    var supplier = document.getElementById("supplier").value;
    var price = document.getElementById("price").value;
    var date = document.getElementById("date").value;
    var status = document.getElementById("status").value;

    // Tạo một hàng mới trong bảng
    var table = document.querySelector("#inventory table tbody");
    var newRow = table.insertRow();

    // Thêm các ô dữ liệu vào hàng mới
    newRow.insertCell().textContent = order;
    newRow.insertCell().innerHTML = `<img class="product-image" src="${selectedImageSrc}" alt="Hình ảnh sản phẩm">`;
    newRow.insertCell().textContent = name;
    newRow.insertCell().textContent = date;
    newRow.insertCell().textContent = status;
    newRow.insertCell().textContent = quantity;

    // Reset các trường nhập liệu
    document.getElementById("order").value = "";
    document.getElementById("image").value = "";
    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("supplier").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
    document.getElementById("status").value = "Còn";
});
