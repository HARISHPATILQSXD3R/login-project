// UI toggle for Sign In / Sign Up
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// 🧠 Function to handle registration
async function registerUser(event) {
    event.preventDefault(); // Stop form reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/register", { // your backend API
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error:", error);
        alert("Error connecting to the server.");
    }
}

// 🧠 Function to handle login
async function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error:", error);
        alert("Error connecting to the server.");
    }
}
