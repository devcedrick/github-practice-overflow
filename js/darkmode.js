// Dark Mode Toggle Script
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
    }

    // Toggle theme function
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            // Switch to light mode
            body.classList.remove('dark-mode');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    }

    // Add click event listener to the toggle button
    themeToggle.addEventListener('click', toggleTheme);

    // Add keyboard support for accessibility
    themeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });

    // Optional: Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', function(e) {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    body.classList.add('dark-mode');
                    themeIcon.textContent = '☀️';
                    themeText.textContent = 'Light Mode';
                } else {
                    body.classList.remove('dark-mode');
                    themeIcon.textContent = '🌙';
                    themeText.textContent = 'Dark Mode';
                }
            }
        });
    }
});