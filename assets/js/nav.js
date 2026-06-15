// Combined navigation functionality - highlight current page and theme toggle
let currentTheme = localStorage.getItem('theme') || 'dark';

document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlight functionality
    const navLinks = document.querySelectorAll('.nav-right a');
    const currentUrl = new URL(window.location.href);
    const currentPath = normalizePath(currentUrl.pathname);
    
    navLinks.forEach(link => {
        const linkUrl = new URL(link.href, window.location.origin);
        
        // Only process internal links
        if (linkUrl.origin === window.location.origin) {
            const linkPath = normalizePath(linkUrl.pathname);
            
            // Remove 'selected' class from all links first
            link.classList.remove('selected');
            
            // Add 'selected' class if paths match
            if (linkPath === currentPath) {
                link.classList.add('selected');
            }
        }
    });

    // Navigation toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navRight = document.querySelector('.nav-right');

    navToggle.addEventListener('click', function() {
        if (!navRight.classList.contains('open')) {
            // When opening - show immediately then trigger animation
            navRight.classList.add('open');
            navRight.style.pointerEvents = 'auto';
            requestAnimationFrame(() => {
                navRight.classList.add('visible');
            });
        } else {
            // When closing - animate out then hide
            navRight.classList.remove('visible');
            navRight.style.pointerEvents = 'none';
            navRight.addEventListener('transitionend', function handler() {
                navRight.classList.remove('open');
                navRight.removeEventListener('transitionend', handler);
            }, { once: true });
        }
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        // Toggle between dark and light themes
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply theme with animation
        const html = document.documentElement;
        html.setAttribute('data-theme', currentTheme);
        
        // Save preference
        localStorage.setItem('theme', currentTheme);
    });

    // Add ripple effect handling
    document.querySelectorAll('.theme-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
            this.classList.add('ripple');
            
            // Remove class after animation completes
            this.addEventListener('animationend', () => {
                this.classList.remove('ripple');
            }, {once: true});
        });
    });
});

// Normalize path by removing .html and trailing slashes
function normalizePath(path) {
    return path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}