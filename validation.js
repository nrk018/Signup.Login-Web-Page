const form = document.getElementById('signup-form') || document.getElementById('form'); // Form ID for signup or login
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    let errors = [];
    let firstName = '';

    if (firstname_input) {
        // Signup form validation
        errors = getSignupFormErrors(
            firstname_input.value,
            email_input.value,
            password_input.value,
            repeat_password_input.value
        );
        firstName = firstname_input.value; // Capture first name for welcome message
    } else {
        // Login form validation
        errors = getLoginFormErrors(email_input.value, password_input.value);
        firstName = 'User'; // Default to 'User' if logging in (no first name field)
    }

    if (errors.length > 0) {
        // If there are any errors
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    } else {
        // If validation passes, prevent the default form submission
        e.preventDefault();
        // Store first name in localStorage
        localStorage.setItem('firstName', firstName);
        // Redirect to the welcome page
        window.location.href = 'welcome.html';
    }
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== repeatPassword) {
        errors.push('Passwords do not match');
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    });
});
