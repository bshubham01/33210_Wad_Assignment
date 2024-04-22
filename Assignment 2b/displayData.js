document.addEventListener('DOMContentLoaded', function () {
    const userDataElement = document.getElementById('userData');
    const userArray = JSON.parse(localStorage.getItem('userArray')) || [];

    if (userArray.length === 0) {
        userDataElement.textContent = 'No user data found.';
    } else {
        userArray.forEach(user => {
            userDataElement.innerHTML += `<p>Username: ${user.username}, Password: ${user.password}</p>`;
        });
    }
});
