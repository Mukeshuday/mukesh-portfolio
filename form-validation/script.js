document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-background");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      alert("Please fill in all fields!");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Success case — show in console or add to list
    console.log("Form submitted successfully:");
    console.log("Name:", name);
    console.log("Email:", email);

    // Optionally add to user list dynamically
    const userList = document.querySelector(".user-list");
    const li = document.createElement("li");
    li.textContent = `${name} ${email}`;
    userList.appendChild(li);

    // Clear the input fields
    nameInput.value = "";
    emailInput.value = "";
  });
});



