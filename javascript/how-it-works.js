document.addEventListener('DOMContentLoaded', function () {
    let navbar_height = document.querySelector('.navbar').offsetHeight;

    /**
     * Header gap calculation
     */
    let gap = navbar_height + 20;


    /**
     * StickySidebar above tablet
     */
    if (window.innerWidth > 768) {
        new StickySidebar('.sidenav', {
            topSpacing: gap,
            bottomSpacing: 20,
        });
    }


    /**
     Scroll to section after link click
     */
    document.querySelectorAll('.sidenav__link').forEach(item => {
        item.addEventListener('click', e => {

            if (document.querySelector(item.hash) != null) {
                e.preventDefault();
                const hash = item.hash;
                window.scroll({
                    top: document.querySelector(hash).offsetTop - gap,
                    left: 0,
                    behavior: 'smooth'
                });

                //history.pushState(hash, '', window.location.pathname + hash);
            }
        })
    })
});