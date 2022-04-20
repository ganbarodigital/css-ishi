module.exports = {
    reflowNow: function() {
        // find all of our navbars
        var navbars = $l(["nav.navbar"]);

        if (!navbars) {
            return;
        }

        // remove all the dropdown boxes first
        Ishi.navbar.removeAllDropdowns();

        // reflow each of them
        $l.each(navbars, function(i, navbar) {
            Ishi.navbar.reflow(navbar);
        });
    },

    reflowThrottler: null,

    reflowSoon: function() {
        if ( !Ishi.navbars.reflowThrottler ) {
            Ishi.navbars.reflowThrottler = setTimeout(function() {
                Ishi.navbars.reflowThrottler = null;
                Ishi.navbars.reflowNow();
           }, 1000);
        }
    },
};