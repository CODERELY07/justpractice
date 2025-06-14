document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    const authTitle = document.querySelector('.auth-header h2');
    
    // Check URL for action parameter
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    
    // Initialize form visibility
    if (action === 'signup') {
        showSignupForm();
    } else {
        showLoginForm();
    }
    
    // Form switching
    if (switchToSignup) {
        switchToSignup.addEventListener('click', showSignupForm);
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', showLoginForm);
    }
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    function showSignupForm() {
        if (loginForm) loginForm.classList.add('hidden');
        if (signupForm) signupForm.classList.remove('hidden');
        if (authTitle) authTitle.textContent = 'Join FreshMart today';
        history.replaceState(null, '', '?action=signup');
    }
    
    function showLoginForm() {
        if (loginForm) loginForm.classList.remove('hidden');
        if (signupForm) signupForm.classList.add('hidden');
        if (authTitle) authTitle.textContent = 'Welcome to FreshMart';
        history.replaceState(null, '', 'signin.html');
    }
    
    function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        console.log('Login attempt with:', { email, password });
        alert('Login successful! Redirecting...');
        window.location.href = 'index.html';
    }
    
    function handleSignup(e) {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const phone = document.getElementById('phone').value;
        
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        console.log('Signup attempt with:', { email, password, phone });
        alert('Account created successfully! Welcome to FreshMart.');
        window.location.href = 'index.html';
    }
});