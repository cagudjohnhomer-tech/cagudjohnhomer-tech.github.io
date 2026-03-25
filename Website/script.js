document.getElementById("btn").addEventListener("click", function() {
    alert("Thanks for your interest! 😊");
});

// Contact button
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", function() {
    message.textContent = "Message feature coming soon!";
});