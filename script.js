// script.js

// Example: Toggle navigation menu visibility on mobile devices
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Example: Display current year in the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

