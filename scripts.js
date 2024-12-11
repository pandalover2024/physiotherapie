document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Remove active class from all sections and links
            sections.forEach(section => {
                section.classList.remove('active');
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the targeted section and link
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
            this.classList.add('active');
        });
    });
});
