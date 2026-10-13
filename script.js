
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formStatus = document.getElementById("formStatus");

// Display the current year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();

// Validate the contact form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formStatus.textContent = "";
  formStatus.className = "";

  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Name validation
  if (name.length < 2) {
    nameError.textContent =
      "Please enter at least 2 characters.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Message validation
  if (message.length < 10) {
    messageError.textContent =
      "Message must contain at least 10 characters.";
    isValid = false;
  }

  // Show the result
  if (isValid) {
    formStatus.textContent =
      "Validation successful! Your details are valid.";
    formStatus.className = "success";

    form.reset();
  } else {
    formStatus.textContent =
      "Please correct the errors above.";
  }
});
