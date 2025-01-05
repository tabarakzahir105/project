document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    const animateItems = (items) => {
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 100}ms`;
        });
    };

    const featuredItems = document.querySelectorAll('.featured-item');
    const postItems = document.querySelectorAll('.post-item');

    animateItems(featuredItems);
    animateItems(postItems);

    // Intersection Observer for lazy loading animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated').forEach(item => {
    observer.observe(item);
});

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});