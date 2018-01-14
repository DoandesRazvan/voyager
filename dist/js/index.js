(function($){
    // dom
    const $navbar = $('.navbar'),
          $navbarButton = $('.navbar-button'),
          $navbarLinks = $('.navbar--links');

    // a way of knowing if the navbar was "fixed" by navbarFix
    var navbarFixed = true;

    // navbar functionality
    $navbarButton.on('click', () => {
        if ($navbarLinks.is(':visible')) {
            $navbarLinks.fadeOut();
            $navbar.slideUp();
        } else {
            $navbarLinks.fadeIn().css('display: flex');
            $navbar.slideDown();
        }
    });

    //making sure navbar is still visible in case navbar was hidden and the button isn't visible anymore. also takes care of hiding the nav if the browser is later resized to mobile size
    function navbarFix() {
        let wdvWidth = $(window).width();

        if (wdvWidth > 1150 && navbarFixed)
            navbarFixed = false;

        if (wdvWidth > 1150 && $navbarButton.is(':hidden')) {
            $navbarLinks.css('display', 'initial');
            $navbar.css('display', 'flex')
        } else if (wdvWidth < 1150 && !navbarFixed) {
            $navbarLinks.css('display', 'none');
            $navbar.css('display', 'none');

            navbarFixed = true;
        }
    }

    $(window).resize(navbarFix);
})(jQuery)