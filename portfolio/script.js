// ✅ Resume Download Function
function downloadResume() {
    const link = document.createElement('a');
    link.href = './assets/Mukeshresume main.pdf'; // ✅ relative path from index.html
    link.download = 'Mukesh_Udaya_Kumar_Resume.pdf';
    document.body.appendChild(link); // append to DOM (optional but safe)
    link.click(); // trigger the download
    document.body.removeChild(link); // cleanup
}

// ✅ Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields! 😅");
        return;
    }

    alert("Thank you, "+ `${name}` +"! Your message has been received. 😊");
    this.reset(); // Clear form fields
});