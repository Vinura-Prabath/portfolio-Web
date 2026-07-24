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