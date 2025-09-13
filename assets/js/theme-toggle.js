const navToggle = document.querySelector('.nav-toggle');
const navRight = document.querySelector('.nav-right');

navToggle.addEventListener('click', function() {
    if (navRight.style.display === 'none' || navRight.style.display === '') {
        // When opening - show immediately then trigger animation
        navRight.style.display = 'flex';
        // Small delay to allow display change to take effect
        setTimeout(() => {
            navRight.style.opacity = '1';
            navRight.style.transform = 'translateY(0)';
        }, 10);
    } else {
        // When closing - animate out then hide
        navRight.style.opacity = '0';
        navRight.style.transform = 'translateY(-10px)';
        navRight.addEventListener('transitionend', function handler() {
            navRight.style.display = 'none';
            navRight.removeEventListener('transitionend', handler);
        }, { once: true });
    }
});

const themeToggle = document.querySelector('.theme-toggle');
// Set initial theme from localStorage or default to dark
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleIcons();

themeToggle.addEventListener('click', () => {
    // Toggle between dark and light themes
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply theme with animation
    const html = document.documentElement;
    console.log('Changing theme to:', currentTheme);
    
    html.setAttribute('data-theme', currentTheme);
    console.log('Applied theme:', currentTheme);
    
    // Save preference and update UI
    localStorage.setItem('theme', currentTheme);
    updateToggleIcons();
});

function updateToggleIcons() {
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const adjustIcon = themeToggle.querySelector('.fa-adjust');
    const icons = themeToggle.querySelectorAll('i');
    
    icons.forEach(icon => icon.style.display = 'none');
    
    if (currentTheme === 'dark') {
        sunIcon.style.display = 'inline-block';
    } else {
        moonIcon.style.display = 'inline-block';
    }
}


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