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