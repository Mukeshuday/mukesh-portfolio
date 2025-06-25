
function downloadResume() {
    const link = document.createElement('a');
    link.href='/portfolio/assets/Mukeshresume main.pdf';
    link.download = 'Mukesh_Udaya_Kumar_Resume.pdf';
}

// contact form
document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();//preventing actual form submission

    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();


    if(!name || !email || !message )
    {
        alert("please fill out all fields! &#128517;	");
        return;
    }

    alert("Thank you, `${name}`! Your message has been recieved.&#128516;	");
    this.reset();
});

