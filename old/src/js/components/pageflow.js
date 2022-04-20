module.exports = {
    adjustHeight: function() {
        var pfLiEls = $l([".pageflow li"]);

        if (!pfLiEls) {
            return;
        }

        for (var i = 0; i < pfLiEls.length; i++) {
            var height = pfLiEls[i].clientHeight;

            var linkEls = $l(["a"], pfLiEls[i]);
            for (var j = 0; j < linkEls.length; j++) {
                $l.css.setProperty(linkEls[j], 'height', height + 'px');
            }
        }
    },

    reflowThrottler: null,

    reflowSoon: function() {
        if ( !Ishi.pageflow.reflowThrottler ) {
            Ishi.pageflow.reflowThrottler = setTimeout(function() {
                Ishi.pageflow.reflowThrottler = null;
                Ishi.pageflow.adjustHeight();
           }, 1000);
        }
    },
};