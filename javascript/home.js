document.addEventListener('DOMContentLoaded', function () {

    /* Adding Video Source after play has been clicked to avoid video being loaded on page load */
    const $home_video = document.querySelector('.js-video');
    const video_url = $home_video.getAttribute('data-url');
    const $source = document.createElement('source');
    $source.src = video_url;
    $source.type = 'video/mp4';

    const $play_button = document.querySelector('.js-play');
    $play_button.addEventListener('click', function (e) {
        e.preventDefault();
        $home_video.appendChild($source);
        $play_button.classList.add('fadeout');
    })
});