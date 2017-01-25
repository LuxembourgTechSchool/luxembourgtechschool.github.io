$(document).ready(function(){
    var checkCanSubmit = function() {
        var nameOk = $('#name-input').val().length > 0;
        var emailOk = $('#email-input').val().length > 0;
        var messageOk = $('#message-input').val().length > 0;

        if ( nameOk && emailOk && messageOk ) {
            $('#submit-btn').removeAttr("disabled");
        } else {
            $('#submit-btn').attr("disabled","disabled");
        }
    }

    $('#name-input').on('change keyup paste input', function() {
        checkCanSubmit();
    });

    $('#email-input').on('change keyup paste input', function() {
        checkCanSubmit();
    });

    $('#message-input').on('change keyup paste input', function() {
        checkCanSubmit();
    });
});