const learnButton = document.getElementById("learnBtn");

learnButton.addEventListener("click", function() {
    alert("Welcome! You just used JavaScript!");
});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    formMessage.textContent = "Sending message...";

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            const name = document.getElementById("name").value;

            formMessage.textContent =
                "Message sent successfully! Thank you, " + name + ".";

            contactForm.reset();

        } else {

            formMessage.textContent =
                "Something went wrong. Please try again.";

        }

    } catch (error) {

        formMessage.textContent =
            "Unable to send message. Please try again.";

    }

});