/*Log in  */
document.getElementById('login-btn').addEventListener('click', function(){
    const emailAddress = document.getElementById('email');
    const getEmail = emailAddress.value;
    const userPassword = document.getElementById('password');
    const getPassword = userPassword.value;
    if(getEmail === 'user@gmail.com' && getPassword === 'userpassword'){
        window.location.href = 'bank.html';
    }else{
        alert('Your account is not registered');
        window.location.href = 'index.html';
    }
});


