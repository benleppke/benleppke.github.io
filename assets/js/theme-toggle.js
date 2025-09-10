const navToggle = document.querySelector('.nav-toggle');
const navRight = document.querySelector('.nav-right');

navToggle.addEventListener('click', function() {
    navRight.classList.toggle('active');
});

const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme from localStorage or system preference
let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleIcons();

themeToggle.addEventListener('click', () => {
    // Cycle through themes: dark → auto → light
    if (currentTheme === 'dark') {
        currentTheme = 'auto';
    } else if (currentTheme === 'auto') {
        currentTheme = 'light';
    } else {
        currentTheme = 'dark';
    }
    
    // Apply theme with animation
    const html = document.documentElement;
    console.log('Changing theme to:', currentTheme);
    
    if (currentTheme === 'auto') {
        // Force reflow and apply auto theme
        html.offsetHeight;
        html.removeAttribute('data-theme');
        console.log('Applied auto theme');
    } else {
        html.setAttribute('data-theme', currentTheme);
        console.log('Applied theme:', currentTheme);
    }
    
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
        moonIcon.style.display = 'inline-block';
    } else if (currentTheme === 'light') {
        sunIcon.style.display = 'inline-block';
    } else {
        adjustIcon.style.display = 'inline-block';
    }
}

// Watch for auto theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (currentTheme === 'auto') {
        document.documentElement.removeAttribute('data-theme');
    }
});