document.addEventListener('DOMContentLoaded', () => {

    // select form, error message and error icon elements in HTML
    const form = document.querySelector('.form');
    const formErrorMsg = document.querySelector('.form__error-msg');
    const errorIcon = document.querySelector('.form__error-icon');

    // when form is submited this event will fire
    form.addEventListener('submit', (event) => {
        validateForm(event);
    });

    // form validation function
    const validateForm = (event) => {
        const emailInput = event.target[0];

        // if email input field does not have any value add active class on elements to indicate it
        if (!emailInput.value) {
            emailInput.classList.add('active');
            formErrorMsg.classList.add('active');
            errorIcon.classList.add('active');
            event.preventDefault();
        }
        // if input field has value
        else {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // and that value is valid remove active class from elements to indicate it and rest the form
            const isValid = emailInput.value.match(emailRegex);
            if (isValid) {
                form.reset();
                emailInput.classList.remove('active');
                formErrorMsg.classList.remove('active');
                errorIcon.classList.remove('active');
                alert('We received your email!\nWe will keep you up-to-date with announcements and our launch deals!');
                return;
            }
            // and that value is not valid add active class on elements to indicate it
            emailInput.classList.add('active');
            formErrorMsg.classList.add('active');
            errorIcon.classList.add('active');
            event.preventDefault();
        }
    }
});