document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content-section');

    function activateTab(tabId) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Deactivate all tab buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');

        // Activate the selected tab button
        document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
    }

    // Set up event listeners for each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    // Initialize by showing the first tab
    if (tabButtons.length > 0) {
        activateTab(tabButtons[0].getAttribute('data-tab'));
    }
});
