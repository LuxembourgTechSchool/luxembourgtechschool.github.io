document.addEventListener('DOMContentLoaded', function () {

    /* Adding Video Source after play has been clicked to avoid video being loaded on page load */
    const $home_video = document.querySelector('.js-video');
    const video_url = $home_video.getAttribute('data-url');
    const video_url_mobile = $home_video.getAttribute('data-url-mobile');
    const $source = document.createElement('source');
    const break_point = 768;
    if (window.innerWidth > break_point) {
        $source.src = video_url;
    } else {
        $source.src = video_url_mobile;
    }
    $source.type = 'video/mp4';

    const $play_button = document.querySelector('.js-play');
    $play_button.addEventListener('click', function (e) {
        e.preventDefault();
        $home_video.appendChild($source);
        $play_button.classList.add('fadeout');
    })
});