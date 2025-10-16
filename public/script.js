const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// UI toggle
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

// ✅ Backend URL
const BACKEND_URL = "https://login-project-umsm.onrender.com";

// Message boxes
const registerMessageBox = document.getElementById('registerMessage');
const loginMessageBox = document.getElementById('loginMessage');

// 🧠 Register
async function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${BACKEND_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        registerMessageBox.innerText = data.message;
        registerMessageBox.style.color = data.message.includes("successfully") ? "green" : "red";

        if (response.ok) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    } catch (error) {
        registerMessageBox.innerText = "Error connecting to server";
        registerMessageBox.style.color = "red";
    }
}

// 🧠 Login
async function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch(`${BACKEND_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        loginMessageBox.innerText = data.message;
        loginMessageBox.style.color = response.ok ? "green" : "red";

        if (response.ok) {
            document.getElementById("loginEmail").value = "";
            document.getElementById("loginPassword").value = "";
        }
    } catch (error) {
        loginMessageBox.innerText = "Error connecting to server";
        loginMessageBox.style.color = "red";
    }
}
