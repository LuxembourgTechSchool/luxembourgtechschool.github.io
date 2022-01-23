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
});