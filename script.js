// Simple form validation for contact section
document.addEventListener('DOMContentLoaded', function() {
    // Add click handler to nav links for smooth scrolling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple project filter (would be connected to buttons in HTML)
    function filterProjects(tech) {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            if (tech === 'all' || project.textContent.includes(tech)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Basic form validation
    const contactForm = document.createElement('form');
    contactForm.innerHTML = `
        <h3>Send me a message</h3>
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
    `;
    contactForm.style.marginTop = '20px';

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for your message! (This is a demo - no data is actually sent)');
        this.reset();
    });

    document.querySelector('#contact').appendChild(contactForm);

    // Console log for debugging
    console.log('Portfolio script loaded!');
});