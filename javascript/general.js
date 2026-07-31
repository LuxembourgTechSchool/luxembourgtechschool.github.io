document.addEventListener('DOMContentLoaded', function () {

    const $burger = document.getElementsByClassName('js-burger')[0];
    const $menu = document.getElementsByClassName('js-navbar-menu')[0];

    $burger.addEventListener('click', function (e) {
        e.preventDefault();
        $burger.classList.toggle('open');
        if ($burger.classList.contains('open')) {
            $burger.setAttribute('aria-expanded', 'true');
        } else {
            $burger.setAttribute('aria-expanded', 'false');
        }
        $menu.classList.toggle('open');
    })

    const typingElements = document.querySelectorAll('[data-typing]');
    Array.prototype.forEach.call(typingElements, function (element) {
        const words = (element.getAttribute('data-typing') || '')
            .split(',')
            .map(function (word) {
                return word.trim();
            })
            .filter(Boolean);

        if (!words.length) {
            return;
        }

        element.textContent = words[0];

        let wordIndex = 0;
        let characterIndex = Array.from(words[0]).length;
        let isDeleting = true;

        function updateText() {
            const characters = Array.from(words[wordIndex]);

            characterIndex += isDeleting ? -1 : 1;
            element.textContent = characters.slice(0, characterIndex).join('');

            let delay = isDeleting ? 65 : 110;

            if (isDeleting && characterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 250;
            } else if (!isDeleting && characterIndex === characters.length) {
                isDeleting = true;
                delay = 1400;
            }

            window.setTimeout(updateText, delay);
        }

        window.setTimeout(updateText, 1400);
    });
});