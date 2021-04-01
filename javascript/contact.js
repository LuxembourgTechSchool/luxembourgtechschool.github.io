$(document).ready(function () {
    function checkCanSubmit() {
        let nameOk = $('#name-input').val().length > 0;
        let emailOk = $('#email-input').val().length > 0;
        let equiryOk = $('#enquiry-input').val().length > 0;
        let messageOk = $('#message-input').val().length > 0;
        let privacyOk = $('#privacy-input').prop('checked');

        if (nameOk && emailOk && messageOk && equiryOk && privacyOk) {
            $('#submit-btn').removeAttr('disabled');
        } else {
            $('#submit-btn').attr('disabled', 'disabled');
        }
    }

    $('#name-input, #email-input, #enquiry-input, #message-input, #privacy-input').on('change keyup paste input', function () {
        checkCanSubmit();
    });
});