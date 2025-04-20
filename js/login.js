document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("overlay").style.display = "flex";
    document.getElementById("loginButton").disabled = true;

    document.getElementById("toast").style.display = "none";
    setTimeout(function () {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            sessionStorage.setItem("loggedIn", true);
            document.getElementById("overlay").style.display = "none";
            window.location.href = "index.html";
        } else {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("loginButton").disabled = false;
            const toast = document.getElementById("toast");
            toast.textContent = "Invalid username or password.";
            toast.classList.add("show");
            setTimeout(function () {
                toast.classList.remove("show");
            }, 3000);
        }
    }, 1500);
});
