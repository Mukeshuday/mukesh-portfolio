function downloadResume() {
    const link = document.createElement('a');
    link.href = './assets/Mukeshresume main.pdf'; 
    link.download = 'Mukesh_Udaya_Kumar_Resume.pdf';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

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