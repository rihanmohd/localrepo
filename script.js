let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signInBtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.tittle');
let underLine = document.querySelector('.underlin')
let Text = document.querySelector('.text');

signInBtn.addEventListener('click', (e) => {
    nameField.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    signInBtn.classList.remove("disable");
    signUpBtn.classList.add("disable");
    underLine.style.transform = 'translateX(35px)';
    Text.innerHTML = "Lost password";

});



signUpBtn.addEventListener('click', (e) => {
    nameField.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    signInBtn.classList.add("disable");
    signUpBtn.classList.remove("disable");
    underLine.style.transform = 'translateX(-35px)';
    Text.innerHTML = "Password suggestion";

    
});