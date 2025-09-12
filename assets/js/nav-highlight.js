// Highlight current page in navbar
document.addEventListener('DOMContentLoaded', function() {
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
});

// Normalize path by removing .html and trailing slashes
function normalizePath(path) {
    return path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}