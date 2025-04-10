document.addEventListener("DOMContentLoaded", function () {
    checkUserSession();
});
function register() {
    let fullName = document.getElementById("fullName").value.trim();
    let username = document.getElementById("regUsername").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();
    if (!fullName || !username || !password || !contact || !address) {
        alert("All fields are required!");
        return;
    }
    if (localStorage.getItem(username)) {
        alert("Username already exists! Choose a different one.");
        return;
    }
    let userData = {
        fullName: fullName,
        username: username,
        password: password,
        contact: contact,
        address: address
    };
    localStorage.setItem(username, JSON.stringify(userData));
    alert("Registration successful! Please log in.");
    showLogin();
}
function login() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let storedUser = localStorage.getItem(username);
    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert("Login successful!");
            localStorage.setItem("currentUser", username);
            showDashboard(userData);
        } else {
            alert("Incorrect password! Try again.");
        }
    } else {
        alert("User not found! Register first.");
    }
}
function showDashboard(userData) {
    document.getElementById("register").classList.add("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("user").innerText = userData.fullName;
    document.getElementById("displayName").innerText = userData.fullName;
    document.getElementById("displayUsername").innerText = userData.username;
    document.getElementById("displayContact").innerText = userData.contact;
    document.getElementById("displayAddress").innerText = userData.address;
}
function logout() {
    localStorage.removeItem("currentUser");
    showLogin();
}
function checkUserSession() {
    let currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        let userData = JSON.parse(localStorage.getItem(currentUser));
        showDashboard(userData);
    } else {
        showLogin();
    }
}
function showLogin() {
    document.getElementById("register").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}
function showRegister() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");
}