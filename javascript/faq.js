$faq_questions = document.querySelectorAll('.faq');

Array.from($faq_questions).forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('open');
    })
});