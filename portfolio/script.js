document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add logic to handle form submission (e.g., sending data to a server)
        alert('Form submitted!');
    });
});

// part2

// Smooth scrolling for menu links
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for back-to-top button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const splashPage = document.getElementById('splashPage');
    const wavePath = document.getElementById('wavePath');

    // Get the animation duration from the CSS style
    const animationDuration = parseFloat(window.getComputedStyle(wavePath).getPropertyValue('animation-duration')) * 1000;

    // Hide the splash page after the wave line animation duration
    setTimeout(function () {
        splashPage.classList.add('splashHidden');
    }, animationDuration);
});


