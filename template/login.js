
function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user={
        username : username,
        email : email,
        password : password,

    }
    var json = JSON.stringify(user);    
    localStorage.setItem(username,json);
    alert("Đăng ký thành công");
}

function login(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user === null){
        alert("vui long nhap")
    }
    else if(username== data.username && password == data.password){
        alert("Đăng nhập thành công")
        window.location.href="../template/index.html"

    }
    else{
        alert("Đăng nhập thất bại")
    }

}