/**
 * Handles image loading animations
 * Adds 'loaded' class to images when they finish loading
 * Works with both already-loaded and dynamically-loaded images
 */

function handleImageLoad(img) {
    img.classList.add('loaded');
}

// Process all images on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            // Image already loaded
            handleImageLoad(img);
        } else {
            // Wait for load
            img.addEventListener('load', () => handleImageLoad(img));
        }
    });
});

// Handle dynamically added images
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'IMG') {
                if (node.complete) {
                    handleImageLoad(node);
                } else {
                    node.addEventListener('load', () => handleImageLoad(node));
                }
            } else if (node.querySelectorAll) {
                node.querySelectorAll('img').forEach(img => {
                    if (img.complete) {
                        handleImageLoad(img);
                    } else {
                        img.addEventListener('load', () => handleImageLoad(img));
                    }
                });
            }
        });
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});