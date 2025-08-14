// REGISTER
if (document.getElementById('register-btn')) {
// REGISTER
if (document.getElementById('register-btn')) {
    document.getElementById('register-btn').addEventListener('click', () => {
        const username = document.getElementById('reg-username').value.trim();
        const password = document.getElementById('reg-password').value.trim();

        if (!username || !password) {
            alert('Please fill all fields.');
            return;
        }

        if (localStorage.getItem(username)) {
            alert('Username already exists.');
        } else {
            localStorage.setItem(username, JSON.stringify({ password }));
            alert('Registration successful!');
            window.location.href = "login.html";
        }
    });
}

// LOGIN
if (document.getElementById('login-btn')) {
    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser && storedUser.password === password) {
            localStorage.setItem('loggedInUser', username);
            window.location.href = "player.html";
        } else {
            alert('Invalid username or password.');
        }
    });
}
    document.getElementById('register-btn').addEventListener('click', () => {
        const username = document.getElementById('reg-username').value.trim();
        const password = document.getElementById('reg-password').value.trim();

        if (!username || !password) {
            alert('Please fill all fields.');
            return;
        }

        if (localStorage.getItem(username)) {
            alert('Username already exists.');
        } else {
            localStorage.setItem(username, JSON.stringify({ password }));
            alert('Registration successful!');
            window.location.href = "login.html";
        }
    });
}

// LOGIN
if (document.getElementById('login-btn')) {
    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser && storedUser.password === password) {
            localStorage.setItem('loggedInUser', username);
            window.location.href = "player.html";
        } else {
            alert('Invalid username or password.');
        }
    });
}
