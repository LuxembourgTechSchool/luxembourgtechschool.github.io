document.addEventListener('DOMContentLoaded', function () {

    const POCKETBASE_URL = 'https://register.techschool.lu';
    const COLLECTION = 'contacts';

    const $form = document.getElementById('contact-form');
    if (!$form) {
        return;
    }

    const $submit = document.getElementById('submit-btn');
    const $privacy = document.getElementById('privacy-input');
    const $status = document.getElementById('form-status');

    const FIELDS = ['name', 'email', 'topic', 'message'];

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function getInput(field) {
        return $form.querySelector('[name="' + field + '"]');
    }

    function getError(field) {
        return $form.querySelector('[data-error-for="' + field + '"]');
    }

    function setFieldError(field, message) {
        const $input = getInput(field);
        const $error = getError(field);
        if ($input) {
            $input.classList.toggle('is-danger', Boolean(message));
        }
        if ($error) {
            $error.textContent = message || '';
            $error.style.display = message ? 'block' : 'none';
        }
    }

    function clearErrors() {
        FIELDS.forEach(function (field) {
            setFieldError(field, '');
        });
    }

    function setStatus(message, type) {
        if (!$status) {
            return;
        }
        $status.textContent = message;
        $status.className = 'form-status' + (type ? ' ' + type : '');
        $status.style.display = message ? 'block' : 'none';
    }

    function setLoading(isLoading) {
        $submit.classList.toggle('is-loading', isLoading);
        $submit.disabled = isLoading;
    }

    function validate() {
        const errors = {};

        const name = getInput('name').value.trim();
        const email = getInput('email').value.trim();
        const topic = getInput('topic').value.trim();
        const message = getInput('message').value.trim();

        if (!name) {
            errors.name = 'Please enter your name.';
        }
        if (!email) {
            errors.email = 'Please enter your email.';
        } else if (!EMAIL_RE.test(email)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!topic) {
            errors.topic = 'Please select a topic.';
        }
        if (!message) {
            errors.message = 'Please enter a message.';
        }

        return errors;
    }

    // Clear a field's error as soon as the user edits it.
    FIELDS.forEach(function (field) {
        const $input = getInput(field);
        if ($input) {
            $input.addEventListener('input', function () {
                setFieldError(field, '');
            });
            $input.addEventListener('change', function () {
                setFieldError(field, '');
            });
        }
    });

    $form.addEventListener('submit', function (e) {
        e.preventDefault();

        clearErrors();

        const errors = validate();
        const fieldNames = Object.keys(errors);

        if (fieldNames.length > 0) {
            fieldNames.forEach(function (field) {
                setFieldError(field, errors[field]);
            });
            setStatus('Please fix the errors above before submitting.', 'has-text-danger');
            const $first = getInput(fieldNames[0]);
            if ($first) {
                $first.focus();
            }
            return;
        }

        if (!$privacy.checked) {
            setStatus('Please accept the Data Protection Policy before submitting.', 'has-text-danger');
            $privacy.focus();
            return;
        }

        const payload = {
            name: getInput('name').value.trim(),
            email: getInput('email').value.trim(),
            topic: getInput('topic').value,
            message: getInput('message').value.trim()
        };

        setLoading(true);
        setStatus('Sending your message…', '');

        fetch(POCKETBASE_URL + '/api/collections/' + COLLECTION + '/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                return response.json()
                    .catch(function () { return {}; })
                    .then(function (data) {
                        const err = new Error((data && data.message) ? data.message : 'Request failed (' + response.status + ')');
                        err.data = data && data.data ? data.data : null;
                        throw err;
                    });
            })
            .then(function () {
                $form.reset();
                setStatus('Thanks! Your message has been sent.', 'has-text-success');
            })
            .catch(function (error) {
                // Map PocketBase field-level validation errors back to the form.
                let hasFieldError = false;
                if (error.data) {
                    FIELDS.forEach(function (field) {
                        const fieldError = error.data[field];
                        if (fieldError && fieldError.message) {
                            setFieldError(field, fieldError.message);
                            hasFieldError = true;
                        }
                    });
                }
                if (hasFieldError) {
                    setStatus('Please fix the errors above before submitting.', 'has-text-danger');
                } else {
                    setStatus('Something went wrong: ' + error.message, 'has-text-danger');
                }
            })
            .then(function () {
                setLoading(false);
            });
    });
});
