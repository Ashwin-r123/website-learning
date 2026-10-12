// Learn button
const learnButton = document.getElementById("learnBtn");

if (learnButton) {
    learnButton.addEventListener("click", function () {
        alert("Welcome! You just used JavaScript!");
    });
}

// Current year in footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const submitButton = document.getElementById("submitButton");

console.log("Portfolio JavaScript loaded successfully!");

if (contactForm && formMessage && submitButton) {
    contactForm.addEventListener("submit", async function (event) {
        // Stop the browser from navigating to Formspree
        event.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "SENDING...";

        formMessage.textContent = "Sending your message...";
        formMessage.style.color = "#d4af37";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formMessage.textContent =
                    "✓ Message sent successfully! Thank you for contacting me.";

                formMessage.style.color = "#28c76f";
                contactForm.reset();
            } else {
                formMessage.textContent =
                    "Unable to send your message. Please try again.";

                formMessage.style.color = "#ff6b6b";
            }
        } catch (error) {
            console.error("Contact form error:", error);

            formMessage.textContent =
                "Unable to send your message. Please check your connection and try again.";

            formMessage.style.color = "#ff6b6b";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "SEND MESSAGE";
        }
    });
} else {
    console.error("Contact form elements could not be found.");
}