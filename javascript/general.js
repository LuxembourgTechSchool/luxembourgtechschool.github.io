document.addEventListener('DOMContentLoaded', function () {

    const $burger = document.getElementsByClassName('burger')[0];
    const $menu = document.getElementsByClassName('navbar__menu')[0];

    $burger.addEventListener('click', function (e) {
        e.preventDefault();
        $burger.classList.toggle('burger--open');
        $menu.classList.toggle('navbar__menu--open');
    })
});