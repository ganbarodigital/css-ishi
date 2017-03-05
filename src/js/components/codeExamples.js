module.exports = {
    addShowSource: function(exampleEl) {
        // special case - explicitly told not to hide it
        var shouldHide = $l.dom.data(exampleEl, 'ishi-autohide') || 'auto';
        if (shouldHide == 'never') {
            return;
        }

        // it needs an ID assigning, so that we have something to
        // act against
        var exampleId = $l.getUniqueId();
        $l.dom.attr(exampleEl, 'id', exampleId);

        // build the element that we're going to show beneath the example
        var sourceType = $l.dom.data(exampleEl, 'type') || "Source";
        var defaultShowText = "Show " + sourceType;
        var defaultHideText = "Hide " + sourceType;
        var showText = $l.dom.data(exampleEl, 'ishi-show') || defaultShowText;
        var hideText = $l.dom.data(exampleEl, 'ishi-hide') || defaultHideText;
        var showId = $l.getUniqueId();
        var hideId = $l.getUniqueId();
        var showEl = $l.dom.create(
            '<div class="example-show"><button onclick="Ishi.codeExamples.toggleExampleSource(\'' + exampleId + '\', \'' + showId + '\', \'' + hideId + '\')" id="' + showId + '">' + showText + '</button><button class="hidden" onclick="Ishi.codeExamples.toggleExampleSource(\'' + exampleId + '\', \'' + showId + '\', \'' + hideId + '\')" id="' + hideId + '">' + hideText + '</button></div>'
        );

        // append it after the header or footer (if there is one)
        var containerEl = exampleEl.parentNode.parentNode;
        var headerEl = $l("header", containerEl);
        if (!headerEl) {
            headerEl = $l("footer", containerEl);
        }
        if (!headerEl) {
            return;
        }

        Ishi.dom.insertAfter(showEl, headerEl.lastElementChild);

        // hide the element
        Ishi.dom.hideItem(exampleEl);
    },

    collapseExampleSource: function(exampleEl)  {
        Ishi.codeExamples.addShowSource(exampleEl);
    },

    findExampleSources: function() {
        var examples = $l([".example-source"]);
        return examples;
    },

    toggleExampleSource: function(exampleId, showId, hideId) {
        Ishi.dom.toggleHiddenItem(exampleId);
        Ishi.dom.toggleHiddenItem(showId);
        Ishi.dom.toggleHiddenItem(hideId);
    },

    onReady: function() {
        var examples = Ishi.codeExamples.findExampleSources();
        for (var i = 0; i < examples.length; i++) {
            Ishi.codeExamples.collapseExampleSource(examples[i]);
        }
        return;
    },
};
