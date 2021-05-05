$faq_questions = document.querySelectorAll('.faq__question');

Array.from($faq_questions).forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('open');
    })
});