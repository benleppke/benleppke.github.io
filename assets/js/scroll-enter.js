document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.projects-grid .card');
    if (!cards.length) return;

    cards.forEach((card, i) => {
        card.style.setProperty('--enter-delay', `${i * 100}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
});
