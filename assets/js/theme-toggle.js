const navToggle = document.querySelector('.nav-toggle');
const navRight = document.querySelector('.nav-right');

navToggle.addEventListener('click', function() {
    navRight.classList.toggle('active');
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