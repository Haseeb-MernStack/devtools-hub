// Dark Mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Password Generator
function generatePassword() {
    const length = document.getElementById("passLength").value || 12;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("passwordOutput").value = password;
}

// JSON Formatter
function formatJSON() {
    const input = document.getElementById("jsonInput").value;
    try {
        const parsed = JSON.parse(input);
        document.getElementById("jsonOutput").value =
            JSON.stringify(parsed, null, 2);
    } catch {
        alert("Invalid JSON");
    }
}

// Base64 Encode/Decode
function encodeBase64() {
    const input = document.getElementById("baseInput").value;
    document.getElementById("baseOutput").value = btoa(input);
}

function decodeBase64() {
    const input = document.getElementById("baseInput").value;
    try {
        document.getElementById("baseOutput").value = atob(input);
    } catch {
        alert("Invalid Base64");
    }
}

// UUID Generator
function generateUUID() {
    const uuid = crypto.randomUUID();
    document.getElementById("uuidOutput").value = uuid;
}

// HEX to RGB
function convertColor() {
    const hex = document.getElementById("hexInput").value.replace("#", "");
    if (hex.length !== 6) return alert("Enter valid HEX");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    document.getElementById("colorOutput").textContent =
        `RGB(${r}, ${g}, ${b})`;
}
