const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(error => error.remove());

    const firstName = document.getElementById("FirstName");
    const lastName = document.getElementById("LastName");
    const email = document.getElementById("email");
    const queryType = document.querySelector('input[name="query"]:checked');
    const message = document.getElementById("message");
    const consent = document.getElementById("consent");

    let valid = true;

    if (firstName.value.trim().length < 2) {
        setError(firstName, "First Name is required or too short!");
        valid = false;
    }
    if (lastName.value.trim().length < 2) {
        setError(lastName, "Last Name is required or too short!");
        valid = false;
    }
    if (!validateEmail(email.value.trim())) {
        setError(email, "Email is required or not valid!");
        valid = false;
    }

    if (!queryType) {
        setError(document.querySelector(".input"), "Query Type is required or not selected");
        valid = false;
    }
    if (message.value.trim().length < 10) {  // Adjusted length for validation
        setError(message, "Message is required or too short!");
        valid = false;
    }
    if (!consent.checked) {
        setError(consent, "Consent is required!");
        valid = false;
    }
    if (valid) {
        console.log("Form submitted successfully:", {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            queryType: queryType.value,
            message: message.value,
            consent: consent.checked
        });
    }
});

function setError(element, message) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.innerHTML = `<h5>${message}</h5>`;
    const errorContainer = element.closest(".input-field") || element.closest(".input") || element.closest(".container");
    errorContainer.append(errorMessage);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
