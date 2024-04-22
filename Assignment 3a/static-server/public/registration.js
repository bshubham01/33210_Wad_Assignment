function registerUser() {
    console.log('Register button clicked');
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if username or password is empty
    if (enteredUsername.trim() === '' || enteredPassword.trim() === '') {
        alert('Username and password cannot be empty. Please fill in all fields.');
        return;
    }

    if (enteredPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
    console.log('Existing Users:', userArray);

    const existingUser = userArray.find(user => user.username === enteredUsername);

    if (existingUser) {
        alert('Username already exists. Please choose a different one.');
    } else {
        const newUser = { username: enteredUsername, password: enteredPassword };
        userArray.push(newUser);
        localStorage.setItem('userArray', JSON.stringify(userArray));
        alert('Registration successful!');
    }
    window.location.href = 'index.html';
}
