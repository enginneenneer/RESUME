const correctPassword = 'view_resume';

function checkPassword() {
    const inputPassword = document.getElementById('password').value;
    if (inputPassword === correctPassword) {
        document.getElementById('password-prompt').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
    return false;
}