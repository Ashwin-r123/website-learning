const learnButton = document.getElementById("learnBtn");

learnButton.addEventListener("click", function() {
    alert("Welcome! You just used JavaScript!");
});
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    formMessage.textContent = "Message received! Thank you, " + name + ".";

    contactForm.reset();
});