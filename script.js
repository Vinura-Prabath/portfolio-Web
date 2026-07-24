// ===================================
// PORTFOLIO JAVASCRIPT - Main Script
// ===================================

// ========== THEME TOGGLE ==========
/**
 * Toggle between dark and light themes
 * Saves preference to localStorage
 */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    
    // Update button emoji
    const themeToggle = document.querySelector('.theme-toggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// ========== MOBILE MENU TOGGLE ==========
/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// ========== CLOSE MOBILE MENU ON LINK CLICK ==========
/**
 * Close mobile menu when a navigation link is clicked
 */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// ========== SMOOTH SCROLLING ==========
/**
 * Enable smooth scrolling for all anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== FORM SUBMISSION ==========
/**
 * Handle contact form submission
 * Validates form and shows confirmation
 */
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (name && email && message) {
        // Show success message
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
        
        // Reset form
        document.querySelector('.contact-form').reset();
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
    } else {
        alert('Please fill in all fields');
    }
}

// ========== LOAD THEME PREFERENCE ==========
/**
 * Load and apply saved theme preference on page load
 */
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        toggleTheme();
    }
    
    // Apply animations on load
    applyScrollAnimations();
});

// ========== SCROLL ANIMATIONS ==========
/**
 * Apply fade-in animations to elements as they come into view
 * Uses Intersection Observer API
 */
function applyScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements that should have animations
    document.querySelectorAll('.project-card, .skill-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// ========== NAVIGATION HIGHLIGHT ==========
/**
 * Highlight the current section in navigation based on scroll position
 */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active navigation link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// ========== SCROLL TO TOP BUTTON ==========
/**
 * Show/hide scroll to top button based on scroll position
 */
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top');
    
    if (scrollButton) {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// ========== ACTIVE LINK STYLING ==========
/**
 * Add styling to active navigation link
 */
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 5px;
    }
    
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s;
        font-size: 1.5rem;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
    }
`;
document.head.appendChild(style);

// ========== FORM INPUT VALIDATION ==========
/**
 * Real-time validation for form inputs
 */
function setupFormValidation() {
    const emailInput = document.getElementById('email');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(this.value);
            if (this.value && !isValid) {
                this.style.borderColor = 'var(--error-color)';
            } else {
                this.style.borderColor = 'var(--border-color)';
            }
        });
    }
}