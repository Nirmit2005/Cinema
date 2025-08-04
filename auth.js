document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("register-name").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const exists = users.find(u => u.email === email);

            if (exists) {
                alert("User already exists with this email.");
            } else {
                users.push({ name, email, password });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registration successful!");
                window.location.href = "login.html";
            }
        });
    }
});
