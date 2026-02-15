document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const feedback = document.getElementById('formFeedback');

            // Validation
            if (name.length < 3) {
                showFeedback('Please enter a valid name (at least 3 characters).', 'error', feedback);
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback('Please enter a valid email address.', 'error', feedback);
                return;
            }

            if (message.length < 10) {
                showFeedback('Message must be at least 10 characters long.', 'error', feedback);
                return;
            }

            // Success
            showFeedback(`<strong>☕ Thank you, ${name}!</strong><br>We've received your message and will get back to you soon!`, 'success', feedback);
            contactForm.reset();
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show feedback message
    function showFeedback(message, type, element) {
        element.innerHTML = message;
        element.className = type === 'success' ? 'mt-3 text-center text-success fw-bold' : 'mt-3 text-center text-danger fw-bold';
        
        if (type === 'success') {
            setTimeout(() => {
                element.innerHTML = '';
                element.className = '';
            }, 5000);
        }
    }

    // Active link highlighting on navbar
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.custom-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Add parallax effect to carousel
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const carouselItems = document.querySelectorAll('.carousel-item');
            carouselItems.forEach(item => {
                item.style.backgroundPosition = `center calc(50% + ${scrolled * 0.5}px)`;
            });
        });
    }
});