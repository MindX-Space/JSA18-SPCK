// Get elements from the DOM
const form = document.getElementById('form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');

// Handle form submission for login
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!username || !password) {
        showErrorMessage('Both username and password are required.');
        return;
    }

    // Retrieve stored users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by username
    const user = users.find(user => user.username === username);

    if (!user) {
        showErrorMessage('Username not found.');
        return;
    }

    // Check if the password matches
    if (user.password !== password) {
        showErrorMessage('Incorrect password.');
        return;
    }

    // If login is successful, redirect to index.html
    window.location.href = './index.html';  // Redirect to the home page after login
});

// Function to display error messages
function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
}
