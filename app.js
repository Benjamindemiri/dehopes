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
    let phoneNumber = '+233531631955';
    window.location.href = 'tel:' + phoneNumber;
});
// Create the overlay element dynamically
const overlay = document.createElement('div');
overlay.classList.add('fullscreen-overlay');
document.body.appendChild(overlay);

// Close overlay when clicking on it
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlay.innerHTML = '';
});

// Add click event to all position images
document.querySelectorAll('.position-item img').forEach(img => {
    img.addEventListener('click', () => {
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        overlay.innerHTML = '';
        overlay.appendChild(fullImg);
        overlay.style.display = 'flex';
    });
});