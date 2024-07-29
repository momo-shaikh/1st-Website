document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('.scroller-image');
    const dotsContainer = document.querySelector('.dots-container');
    let currentIndex = 0;

    const colors = ['#ff3b30', '#ffcc00', '#4cd964']; // Red, Yellow, Green

    function updateImagePosition() {
        const offset = -currentIndex * 100; // -100% per image
        imageContainer.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function createDots() {
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.style.backgroundColor = colors[index % colors.length]; // Cycle through colors
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateImagePosition();
            });
            dotsContainer.appendChild(dot);
        });
    }

    createDots();
    updateImagePosition(); // Initialize position and dots
});
