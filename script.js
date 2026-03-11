document.addEventListener('DOMContentLoaded', () => {
    // Select elements based on Step 5 instructions
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const mainContainer = document.getElementById('container');

    // Add event listener to "Sign Up" button
    signUpButton.addEventListener('click', () => {
        // Add right-panel-active class to trigger CSS animations
        mainContainer.classList.add('right-panel-active');
    });

    // Add event listener to "Sign In" button
    signInButton.addEventListener('click', () => {
        // Remove right-panel-active class to reverse CSS animations
        mainContainer.classList.remove('right-panel-active');
    });
});
