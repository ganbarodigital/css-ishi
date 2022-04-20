var Ishi = {
    anchors: require("./components/anchor.js"),
    css: require("./helpers/css.js"),
    dom: require("./helpers/dom.js"),
    fastclick: require("./vendor/fastclick.js"),
    codeExamples: require("./components/codeExamples.js"),
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

    Ishi.anchors.options = {
        placement: 'right',
        visible: 'always'
    };

    var bodyEl = $l("body[data-ishi-anchors]");
    if (bodyEl && $l.dom.attr(bodyEl, 'data-ishi-anchors') == 1) {
        Ishi.anchors.add("main article h2[id], main article h3[id]");
    }

    bodyEl = $l("body[data-ishi-code-examples]");
    if (bodyEl && $l.dom.attr(bodyEl, 'data-ishi-code-examples') == 1) {
        Ishi.codeExamples.onReady();
    }
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