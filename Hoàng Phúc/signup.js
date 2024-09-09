// Get elements from the DOM
const form = document.getElementById('form');
const usernameInput = document.getElementById('username-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const errorMessage = document.getElementById('error-message');

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const repeatPassword = repeatPasswordInput.value.trim();

    // Basic validation
    if (!username || !email || !password || !repeatPassword) {
        showErrorMessage('All fields are required.');
        return;
    }

    if (password !== repeatPassword) {
        showErrorMessage('Passwords do not match.');
        return;
    }

    if (password.length < 6) {
        showErrorMessage('Password should be at least 6 characters.');
        return;
    }

    // Check if the email is already registered
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        showErrorMessage('Email is already registered.');
        return;
    }

    // Store the user data in localStorage
    const newUser = {
        username: username,
        email: email,
        password: password // For real applications, passwords should be hashed!
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign-up successful! You can now log in.');
    window.location.href = './login.html';  // Redirect to login page after sign-up
});

// Function to display error messages
function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
}
