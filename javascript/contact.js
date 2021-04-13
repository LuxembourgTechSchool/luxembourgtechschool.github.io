document.addEventListener('DOMContentLoaded', function () {
    const checkCanSubmit = function () {
        let nameOk = document.querySelector('#name-input').value.length > 0;
        let emailOk = document.querySelector('#email-input').value.length > 0;
        let equiryOk = document.querySelector('#enquiry-input').value.length > 0;
        let messageOk = document.querySelector('#message-input').value.length > 0;
        let privacyOk = !!document.querySelector('#privacy-input:checked');

        const $submitBtn = document.querySelector('#submit-btn');

        if (nameOk && emailOk && equiryOk && messageOk && privacyOk) {
            $submitBtn.removeAttribute('disabled');
        } else {
            $submitBtn.setAttribute('disabled', 'disabled')
        }
    }

    document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach(item => {
        item.addEventListener('change', checkCanSubmit, false);
        item.addEventListener('keyup', checkCanSubmit, false);
        item.addEventListener('paste', checkCanSubmit, false);
        item.addEventListener('input', checkCanSubmit, false);
    })
});