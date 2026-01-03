// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Optional: Highlight active link
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});


document.getElementById('callBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    // Your phone number here
    let phoneNumber = '+233501234567';
    window.location.href = 'tel:' + phoneNumber;
});