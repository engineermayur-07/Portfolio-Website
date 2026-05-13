 document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Typewriter Effect
    const span = document.querySelector('#typewriter-headline span');
    const text = "Aspiring Software Developer"; // The text to animate
    span.textContent = ''; // Clear existing text
    
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            span.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 150); // Speed of typing
        }
    }

    const homeSection = document.getElementById('home');

    const updateHeaderAvatar = () => {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        const shouldShowLogo = homeBottom < 90;
        document.body.classList.toggle('home-scrolled', shouldShowLogo);
    };

    updateHeaderAvatar();
    window.addEventListener('scroll', updateHeaderAvatar);
    window.addEventListener('resize', updateHeaderAvatar);

    // Start typing after 1 second delay
    setTimeout(typeEffect, 1000);
});