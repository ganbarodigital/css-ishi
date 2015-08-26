var Ishi = {
    css: require("./helpers/css.js"),
    dom: require("./helpers/dom.js"),
    fastclick: require("./vendor/fastclick.js"),
    navbar: require("./components/navbar.js"),
    navbars: require("./components/navbars.js"),
    pageflow: require("./components/pageflow.js"),
    toc: require("./components/toc.js"),
};

if (global.Ishi === undefined) {
    global.Ishi = Ishi;
}

$l.ready(function() {
    Ishi.navbars.reflowNow();
    Ishi.toc.onReady();
    Ishi.pageflow.adjustHeight();
    Ishi.fastclick.attach(document.body);
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

$l.dom.setEvent(
    window,
    'resize',
    Ishi.pageflow.reflowSoon
);