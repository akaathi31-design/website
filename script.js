const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

// Ensure elements exist before running logic
if (cursorDot && cursorRing) {
    document.addEventListener('mousemove', (e) => {
        // Dot moves instantly
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        // Ring moves instantly with translation (smoothness handled by CSS)
        cursorRing.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });

    const hoverElements = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-box, .info-row');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.style.width = '60px';
            cursorRing.style.height = '60px';
            cursorRing.style.backgroundColor = 'rgba(255, 77, 0, 0.1)';
            cursorRing.style.borderColor = 'transparent';
            // Adjust center for larger size (30px offset)
            const x = parseFloat(cursorDot.style.left) || 0;
            const y = parseFloat(cursorDot.style.top) || 0;
            cursorRing.style.transform = `translate(${x - 30}px, ${y - 30}px)`;
        });

        el.addEventListener('mouseleave', () => {
            cursorRing.style.width = '40px';
            cursorRing.style.height = '40px';
            cursorRing.style.backgroundColor = 'transparent';
            cursorRing.style.borderColor = '#ff4d00';
            // Reset to standard offset
            const x = parseFloat(cursorDot.style.left) || 0;
            const y = parseFloat(cursorDot.style.top) || 0;
            cursorRing.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
        });
    });
}