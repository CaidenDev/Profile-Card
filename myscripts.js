document.addEventListener('DOMContentLoaded', () => {
    const messageButton = document.getElementById('button');
    const contactSection = document.getElementById('contact-section');

    // Show the contact section and change button to "Send"
    function showSection() {
        console.log("Showing contact section");
        contactSection.style.display = 'flex';
        messageButton.innerText = 'Send';
        messageButton.onclick = sendEmail;
    }

    // Hide the contact section and change button back to "Message"
    function hideSection() {
        console.log("Hiding contact section");
        contactSection.style.display = 'none';
        messageButton.innerText = 'Message';
        messageButton.onclick = showSection;
    }

    // Send the email using EmailJS
    function sendEmail() {
        console.log("Sending email...");
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        emailjs.send('SERVICE CODE', 'TEMPLATE CODE', templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Email sent successfully!');
                hideSection();
            }, (error) => {
                console.error('Failed to send email. Please try again later.', error);
                alert('Failed to send email. Please try again later.');
            });
    }

    // Change the height of an element
    function changeHeight(element, height) {
        element.style.height = height + 'px';
    }

    
    messageButton.onclick = showSection;

    
    document.querySelector('.close-button').onclick = hideSection;
});
