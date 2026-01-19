// Event listener #1
document.getElementById("projectBtn").addEventListener("click", function () {
  document.getElementById("projectMessage").textContent =
    "More projects coming soon!";
});

// Event listener #2
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value;
  document.getElementById("formResponse").textContent =
    `Thank you for your message, ${name}!`;
});

