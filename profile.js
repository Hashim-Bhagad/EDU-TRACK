const editButton = document.getElementById("edit-btn");
const saveButton = document.getElementById("save-btn");
const cancelButton = document.getElementById("cancel-btn");

const usernameDisplay = document.getElementById("username-display");
const usernameValue = document.getElementById("username-value");
const usernameInput = document.getElementById("username-input");

const emailValue = document.getElementById("email-value");
const emailInput = document.getElementById("email-input");

const bioValue = document.getElementById("bio-value");
const bioInput = document.getElementById("bio-input");

const saveCancelSection = document.getElementById("save-cancel");

// Show input fields for editing
editButton.addEventListener("click", () => {
    usernameValue.classList.add("hidden");
    usernameInput.classList.remove("hidden");

    emailValue.classList.add("hidden");
    emailInput.classList.remove("hidden");

    bioValue.classList.add("hidden");
    bioInput.classList.remove("hidden");

    saveCancelSection.classList.remove("hidden");
    editButton.classList.add("hidden");
});

// Save the updated values
saveButton.addEventListener("click", () => {
    const updatedUsername = usernameInput.value;
    const updatedEmail = emailInput.value;
    const updatedBio = bioInput.value;

    usernameDisplay.textContent = updatedUsername;
    usernameValue.textContent = updatedUsername;
    emailValue.textContent = updatedEmail;
    bioValue.textContent = updatedBio;

    hideEditingFields();
});

// Cancel editing and revert changes
cancelButton.addEventListener("click", () => {
    usernameInput.value = usernameValue.textContent;
    emailInput.value = emailValue.textContent;
    bioInput.value = bioValue.textContent;

    hideEditingFields();
});

// Hide input fields and show values
function hideEditingFields() {
    usernameValue.classList.remove("hidden");
    usernameInput.classList.add("hidden");

    emailValue.classList.remove("hidden");
    emailInput.classList.add("hidden");

    bioValue.classList.remove("hidden");
    bioInput.classList.add("hidden");

    saveCancelSection.classList.add("hidden");
    editButton.classList.remove("hidden");
}
