"use script";

(function(){
    const menuToggle = document.querySelector(".menu-icon");
    const mainNav = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("open");
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === 'Space') {
            mainNav.classList.toggle("open");
        }
    });

    const subscribeTexts = document.querySelectorAll(".subscribe-text");
    const subscribeDialog = document.querySelector(".dialog");
    const cancelButton = document.querySelector(".cancelButton");
    const subscribeButton = document.querySelector(".subscribeButton");
    const form = document.querySelector(".form");
    const email = document.querySelector(".email");
    const emailError = document.querySelector(".email-error");
    const confirmEmail = document.querySelector(".confirm-email");
    const confirmError = document.querySelector(".confirm-error");

    subscribeTexts.forEach((subscribeText) => {
        subscribeText.addEventListener("click", () => {
            if (!subscribeDialog.classList.contains("open")) {
                subscribeDialog.classList.toggle("open");
            } else {
                subscribeDialog.classList.remove("open");
            }
        });
    });

    cancelButton.addEventListener("click", () => {
        subscribeDialog.classList.remove("open");
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            subscribeDialog.classList.remove("open");
        }
    });

    form.addEventListener("submit", (event) => {
        let isInvaild = false;

        const getEmail = email.value;
        if (!getEmail){
            isInvaild = true;
            emailError.innerText = "This field is required";
        }

        if (!getEmail.includes('@')){
            isInvaild = true;
            emailError.innerText = "Email must contain the @ symbol";
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


})()