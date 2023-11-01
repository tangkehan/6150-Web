"use script";
(function(){
    const form = document.querySelector('.form');
    const name = document.querySelector(".name");
    const nameError = document.querySelector(".name-error");
    const email = document.querySelector(".email");
    const emailError = document.querySelector(".email-error");
    const confirmEmail = document.querySelector(".confirm-email");
    const confirmError = document.querySelector(".confirm-error");

    form.addEventListener("submit", (event) => {
        let isInvaild = false;

        const getName = name.value;  
        if (!getName){
            isInvaild = true;
            nameError.style.display = "block";
        }

        const getEmail = email.value;
        if (!getEmail){
            isInvaild = true;
            emailError.innerText = "This field is required";
        }

        const getConfirmEmail = confirmEmail.value;
        if (getConfirmEmail != getEmail){
            isInvaild = true;
            confirmError.innerText = "Confirm email does not match";
        }


        if (isInvaild){
            event.preventDefault();
        }

    })

    name.addEventListener("input", (event) => {
        const getName = event.target.value;
        if (!getName){
            nameError.style.display = "block";
        }
        else{
            nameError.style.display = "none";
        }
    })

    email.addEventListener("input", (event) => {
        const getEmail = event.target.value;
        if (!getEmail){
            emailError.innerText = "This field is required";
        }
        else{
            emailError.innerText = "";
        }
    })

    confirmEmail.addEventListener("input", (event) => {
        const getConfirmEmail = event.target.value;
        const getEmail = email.value;
        if (getConfirmEmail != getEmail){
            confirmError.innerText = "Confirm email does not match";
        }
        else{
            confirmError.innerText = "";
        }
    })


})();