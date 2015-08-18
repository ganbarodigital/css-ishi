var Ishi = {
    css: require("./helpers/css.js"),
    dom: require("./helpers/dom.js"),
    navbar: require("./components/navbar.js"),
    navbars: require("./components/navbars.js"),
    toc: require("./components/toc.js"),
};

if (global.Ishi === undefined) {
    global.Ishi = Ishi;
}

$l.ready(function() {
    Ishi.navbars.reflowNow();
    Ishi.toc.onReady();
});

$l.dom.setEvent(
    window,
    'orientationchange',
    Ishi.navbars.reflowSoon
);

$l.dom.setEvent(
    window,
    'resize',
    Ishi.navbars.reflowSoon
);