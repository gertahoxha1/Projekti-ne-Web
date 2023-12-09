document.addEventListener("DOMContentLoaded",
function(validimi){
    const BtnSubmit = document.getElementById('submit');

    const validate = (validimi) => {
        validimi.preventDefault();
        const email= documument.getElementById('email');
        const password = document.getElementById('password');

        if (email.value === ""){
            alert("Please write your email");
            email.focus();
            return false;
        }
        if (password.value === ""){
            alert("Please write your password");
            password.focus();
            return false;
        }

        if (!emailValid(email.value)){
            alert("Please write a valid email");
            email.focus();
            return false;
        }
        return true;

    }

    const emailValid = (email) => {
        const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return emailRegex.test (email.toLowerCase());

    }

    BtnSubmit.addEventListener('click', validate);
}

)