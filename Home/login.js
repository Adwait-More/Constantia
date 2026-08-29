const nameinput=document.getElementById('username');
const passwordinput=document.getElementById('password');
const loginform=document.getElementById('login form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username=nameinput.value;
    const password=passwordinput.value;
    console.log('Username:', username);
    console.log('Password:', password);
});