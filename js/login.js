document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Hiển thị hiệu ứng loading
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("loginButton").disabled = true; // Disable button khi đang xử lý

    // Ẩn toast nếu có
    document.getElementById("toast").style.display = "none";

    // Mô phỏng việc kiểm tra đăng nhập
    setTimeout(function () {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);

        // Nếu đăng nhập thành công
        if (user) {
            // Lưu trạng thái đăng nhập vào sessionStorage
            sessionStorage.setItem("loggedIn", true);

            // Ẩn hiệu ứng loading và chuyển hướng đến home
            document.getElementById("overlay").style.display = "none";
            window.location.href = "index.html";  // Chuyển đến trang chủ
        } else {
            // Đăng nhập thất bại
            document.getElementById("overlay").style.display = "none";
            document.getElementById("loginButton").disabled = false;

            // Hiển thị thông báo toast lỗi
            const toast = document.getElementById("toast");
            toast.textContent = "Invalid username or password.";
            toast.classList.add("show");

            // Ẩn toast sau 3 giây
            setTimeout(function () {
                toast.classList.remove("show");
            }, 3000);
        }
    }, 1500);  // Giả lập việc kiểm tra thông tin trong 1.5 giây
});
