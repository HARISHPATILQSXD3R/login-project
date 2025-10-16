const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const messageBox = document.getElementById('message'); // create <div id="message"></div> in HTML

// UI toggle
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

// ✅ Backend URL
const BACKEND_URL = "https://login-project-umsm.onrender.com"; // your Render backend URL

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
        messageBox.innerText = data.message;
        messageBox.style.color = data.message.includes("successfully") ? "green" : "red";

        if (response.ok) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }

    } catch (error) {
        console.error(error);
        messageBox.innerText = "Error connecting to server";
        messageBox.style.color = "red";
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
        messageBox.innerText = data.message;
        messageBox.style.color = response.ok ? "green" : "red";

        if (response.ok) {
            document.getElementById("loginEmail").value = "";
            document.getElementById("loginPassword").value = "";
        }

    } catch (error) {
        console.error(error);
        messageBox.innerText = "Error connecting to server";
        messageBox.style.color = "red";
    }
}
