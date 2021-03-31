document.addEventListener('DOMContentLoaded', function () {

    $burger = document.getElementsByClassName('burger')[0];
    $menu = document.getElementsByClassName('navbar__menu')[0];

    $burger.addEventListener('click', function (e) {
        e.preventDefault();
        $burger.classList.toggle('burger--open');
        $menu.classList.toggle('navbar__menu--open');
    })
});