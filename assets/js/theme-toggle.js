document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-right').classList.toggle('active');
});

const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme from localStorage or system preference
let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleIcons();

themeToggle.addEventListener('click', () => {
    // Cycle through themes: dark → system → light
    if (currentTheme === 'dark') {
        currentTheme = 'system';
    } else if (currentTheme === 'system') {
        currentTheme = 'light';
    } else {
        currentTheme = 'dark';
    }
    
    // Apply theme with animation
    const html = document.documentElement;
    console.log('Changing theme to:', currentTheme);
    
    if (currentTheme === 'system') {
        // Force reflow and apply system theme
        html.offsetHeight;
        html.removeAttribute('data-theme');
        console.log('Applied system theme');
    } else {
        html.setAttribute('data-theme', currentTheme);
        console.log('Applied theme:', currentTheme);
    }
    
    // Save preference and update UI
    localStorage.setItem('theme', currentTheme);
    updateToggleIcons();
});

function updateToggleIcons() {
    const icons = themeToggle.querySelectorAll('i');
    icons.forEach(icon => icon.style.display = 'none');
    
    if (currentTheme === 'dark') {
        themeToggle.querySelector('.fa-moon').style.display = 'inline-block';
    } else if (currentTheme === 'light') {
        themeToggle.querySelector('.fa-sun').style.display = 'inline-block';
    } else {
        themeToggle.querySelector('.fa-adjust').style.display = 'inline-block';
    }
}

// Watch for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (currentTheme === 'system') {
        document.documentElement.removeAttribute('data-theme');
    }
});