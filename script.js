const banner = document.getElementsByClassName('banner')[0];
const thankYou = document.getElementsByClassName('thank-you')[0];
const formName = document.getElementById('your-name');
const formEmail = document.getElementById('your-email');
const submitButton = document.getElementById('submit-button')



function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

formEmail.addEventListener('input', () => {
    
    let emailValue = formEmail.value;
    let validEmail = validateEmail(emailValue);
    
    if ( !validEmail ) {
        formEmail.classList.add("invalid");
        console.log( validEmail,'Nesprávny formát emailu')
    } else {
        formEmail.classList.remove("invalid");
    }
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    let nameValue = formName.value;
    let emailValue = formEmail.value;

    let validEmail = validateEmail(emailValue);

    if ( !validEmail ) {
        formEmail.classList.add("invalid");
        console.log(nameValue, 'Nesprávny formát emailu')
    } else {
        banner.classList.add("move-out");
        thankYou.classList.add("move-in");
        console.log(nameValue, emailValue)
    }
});

