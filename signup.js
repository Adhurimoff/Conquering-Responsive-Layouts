// 1. Fix event name
document.addEventListener("DOMContentLoaded", () => { 
    const form = document.getElementById('signinForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstName = document.getElementById('name').value.trim();
        const lastName  = document.getElementById('surname').value.trim();
        const username  = document.getElementById('username').value.trim();
        const email     = document.getElementById('email').value.trim();
        const password  = document.getElementById('password').value;

        
        let errors = [];                                    

        // 3. Fix all to use "errors" (not error)
        if (firstName.length < 2) errors.push("First name too short");
        if (lastName.length < 2)  errors.push("Last name too short");
        if (username.length < 4)  errors.push('Username must be 4+ chars');
        if (!email.includes('@') || !email.includes('.')) errors.push("Invalid email");
        if (password.length < 6)  errors.push('Password must be 6+ characters');

       
        if (errors.length > 0) {
            alert('Fix these:\n• ' + errors.join('\n• '));    
            return;
        }

        console.log('SIGN-UP SUCCESS!', { firstName, lastName, username, email });
        alert(`Welcome ${firstName} ${lastName}! Account created.`);
        form.reset();
    });
});