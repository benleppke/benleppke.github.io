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
        if (navRight.style.display === 'none' || navRight.style.display === '') {
            // When opening - show immediately then trigger animation
            navRight.style.display = 'flex';
            navRight.style.pointerEvents = 'auto';
            // Small delay to allow display change to take effect
            setTimeout(() => {
                navRight.style.opacity = '1';
                navRight.style.transform = 'translateY(0)';
            }, 10);
        } else {
            // When closing - animate out then hide
            navRight.style.opacity = '0';
            navRight.style.transform = 'translateY(-10px)';
            navRight.style.pointerEvents = 'none';
            navRight.addEventListener('transitionend', function handler() {
                navRight.style.display = 'none';
                navRight.removeEventListener('transitionend', handler);
            }, { once: true });
        }
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateToggleIcons();

    themeToggle.addEventListener('click', () => {
        // Toggle between dark and light themes
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply theme with animation
        const html = document.documentElement;
        html.setAttribute('data-theme', currentTheme);
        
        // Save preference and update UI
        localStorage.setItem('theme', currentTheme);
        updateToggleIcons();
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

function updateToggleIcons() {
    const themeToggle = document.querySelector('.theme-toggle');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const icons = themeToggle.querySelectorAll('i');
    
    icons.forEach(icon => icon.style.display = 'none');
    
    if (currentTheme === 'dark') {
        sunIcon.style.display = 'inline-block';
    } else {
        moonIcon.style.display = 'inline-block';
    }
}

// Handle window resize to reset menu if needed
window.addEventListener('resize', function() {
    const navRight = document.querySelector('.nav-right');
    // Check if window is desktop size (768px matches common breakpoint)
    if (window.innerWidth >= 768) {
        navRight.style.display = 'flex';
        navRight.style.opacity = '1';
        navRight.style.transform = 'translateY(0)';
        navRight.style.pointerEvents = 'auto';
    }
});