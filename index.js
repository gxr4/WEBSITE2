
    function handleFormSubmit() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const status  = document.getElementById('form-status');

    if (!name || !email || !message) {
    status.style.color = '#c0392b';
    status.textContent = 'Please fill in your name, email, and message.';
    return;
}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    status.style.color = '#c0392b';
    status.textContent = 'Please enter a valid email address.';
    return;
}

    // Opens the user's mail client pre-filled with the form data
    const mailto = `mailto:charles.montehermoso@cit.edu`
    + `?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}`
    + `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailto;

    status.style.color = '#2c4a3e';
    status.textContent = '✓ Opening your mail client...';
}
