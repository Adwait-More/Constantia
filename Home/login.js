const nameInput=document.getElementById('userName');
const passwordInput=document.getElementById('password');
const loginForm=document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username=nameInput.value;
    const password=passwordInput.value;
    console.log('Username:', username);
    console.log('Password:', password);
    
});