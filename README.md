# Project Title: Signup/Login Page

## Overview
The **Signup/Login Page** project is a simple yet functional web-based user authentication system, designed with modern web technologies including HTML, CSS, and JavaScript. The project focuses on user-friendly design, responsive layouts, and dynamic form validation, offering a seamless experience for users registering or logging into a web application.



https://github.com/user-attachments/assets/82862bc4-4a13-491f-b188-e9078316eeef



## Features

1. **Responsive Design**:
   - The layout is fully responsive, adapting to various screen sizes and devices to ensure an optimal user experience across all platforms.

2. **Modern Styling**:
   - The project features a sleek and modern design, utilizing custom properties (CSS variables) for easy theme management and consistency.
   - Interactive elements include smooth transitions, hover effects, and a typewriter animation for the heading, enhancing the visual appeal.

3. **Form Validation**:
   - The project includes robust client-side validation to ensure data integrity. The validation script checks for empty fields, valid email formats, password length, and password matching for the signup form.
   - Validation errors are displayed dynamically, with incorrect fields highlighted for user convenience.

4. **LocalStorage Integration**:
   - Upon successful signup, the user's first name is stored in the browser's localStorage. This data is then used to display a personalized welcome message on the welcome page.

5. **User Experience Enhancements**:
   - The project provides immediate feedback to users during form interactions, such as changing label colors when input fields are focused, and displaying error messages in real-time.

## File Structure

- **index.html**: The main HTML structure for the Signup page.
- **login.html**: The HTML structure for the Login page.
- **welcome.html**: The HTML structure for the Welcome page, displayed after successful signup or login.
- **style.css**: The CSS file that defines the visual styles and responsive design elements.
- **validation.js**: The JavaScript file responsible for handling form validation and user interaction logic.

## How to Use

1. **Signup**:
   - Users can sign up by providing their first name, email, and password. The form ensures that all fields are filled out correctly before allowing submission.

2. **Login**:
   - Returning users can log in with their email and password. The form checks for correct input formats and provides immediate feedback if any fields are left blank.

3. **Welcome Page**:
   - After successful signup or login, users are redirected to the welcome page, where a personalized message is displayed based on the stored first name.

## Conclusion

The Signup/Login Page project is an excellent starting point for integrating user authentication into a web application. It combines modern design, responsive layouts, and essential validation to create a smooth user experience.
