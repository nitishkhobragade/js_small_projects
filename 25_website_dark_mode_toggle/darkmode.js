const toggleButton = document.getElementById('toggle-button');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

// Set initial mode based on local storage or default to light mode
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    toggleIcon.src = 'images/icons/moon.png'; // Set moon icon for dark mode
    toggleText.textContent = 'Switch to Light Mode';
} else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    toggleIcon.src = 'images/icons/sun.png'; // Set sun icon for light mode
    toggleText.textContent = 'Switch to Dark Mode';
}

// Add event listener for the button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update the button text and icon based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleText.textContent = 'Switch to Light Mode';
        toggleIcon.src = 'images/icons/moon.png'; // Change to moon icon
        localStorage.setItem('mode', 'dark');
    } else {
        toggleText.textContent = 'Switch to Dark Mode';
        toggleIcon.src = 'images/icons/sun.png'; // Change to sun icon
        localStorage.setItem('mode', 'light');
    }
});
