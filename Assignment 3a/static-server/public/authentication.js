function authenticateUser() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if the entered credentials match any user in the stored data
    const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
    const authenticatedUser = userArray.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (authenticatedUser) {
        window.location.href = 'welcome.html';
        alert('Authentication successful!');
        // Redirect or perform other actions after successful authentication
    } else {
        alert('Authentication failed. Please check your credentials.');
    }
}
