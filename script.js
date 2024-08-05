document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = getPasswordStrengthFeedback(password);
});

function getPasswordStrengthFeedback(password) {
    let strength = 0;
    let feedback = "";

    // Length
    if (password.length >= 8) {
        strength++;
        feedback += "<strong>Good length</strong>";
    } else {
        feedback += "<strong>Password is too short</strong>";
    }

    // Lowercase
    if (/[a-z]/.test(password)) {
        strength++;
    } else {
        feedback += "<div>Add lowercase letters</div>";
    }

    // Uppercase
    if (/[A-Z]/.test(password)) {
        strength++;
    } else {
        feedback += "<div>Add uppercase letters</div>";
    }

    // Numbers
    if (/\d/.test(password)) {
        strength++;
    } else {
        feedback += "<div>Add numbers</div>";
    }

    // Special characters
    if (/[\W_]/.test(password)) {
        strength++;
    } else {
        feedback += "<div>Add special characters</div>";
    }

    // Strength Feedback
    if (strength === 5) {
        feedback = "<strong>Password is strong</strong>";
    } else if (strength >= 3) {
        feedback += "<div>Password is moderate</div>";
    } else {
        feedback += "<div>Password is weak</div>";
    }

    return feedback;
}
