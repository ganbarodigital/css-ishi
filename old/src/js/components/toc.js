module.exports = {
    buildToc: function(headings) {
        var toc = $l.dom.create('<ol></ol>');

        for(var i = 0; i < headings.length; i++) {
            // this should escape the title correctly and portably
            var headingText = document.createTextNode(headings[i].title);

            // create the heading list item
            var headingEl = $l.dom.create('<li><a href="#' + headings[i]["id"] + '"></a></li>');
            headingEl.childNodes[0].childNodes[0].appendChild(headingText);

            // add our new heading to our list
            toc.childNodes[0].appendChild(headingEl);

            // are there any children?
            if (headings[i]["children"].length > 0) {
                toc.childNodes[0].appendChild(Ishi.toc.buildToc(headings[i]["children"]));
            }
        }

        return toc;
    },

    findHeadings: function(maxDepth) {
        // we want to make sure we're only looking inside the main
        // content
        var mainEl = $l("main");
        var articleEl = $l("article", mainEl);

        var parentEl = articleEl ? articleEl : mainEl;

        // build the list of heading tags that we are looking for
        var selector = "";
        for (var i = 2; i <= maxDepth; i++) {
            if (selector.length > 0) {
                selector = selector + ", ";
            }
            selector = selector + "h" + i + "[id]";
        }

        // find all of the headings that we want
        var headingEls = $l([selector], parentEl);

        // convert them into a hierarchy
        var headings = Ishi.toc._nestHeadings(headingEls);

        return headings;
    },

    _nestHeadings: function(headingEls) {
        var headings = [];
        var stack = [];
        var currentLevel = -1;

        for (var i = 0; i < headingEls.length; i++) {
            // skip over anything that has the 'notoc' class
            if (Ishi.css.hasClass(headingEls[i], 'notoc')) {
                continue;
            }

            // we are interested in this heading
            var heading = {
                id: $l.dom.attr(headingEls[i], 'id'),
                title: headingEls[i].textContent,
                children: [],
                level: Ishi.dom.getHeadingLevel(headingEls[i]),
            };

            // special case - first heading in the whole list!
            if (headings.length === 0) {
                currentLevel = heading.level;
            }

            // do we need to unwind the stack?
            if (heading.level < currentLevel) {
                // yes, we do ... we are not a child of whatever is
                // at the end of the stack
                while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
                    stack.pop();
                }
            }

            // work out whether we are a child or something or not
            if (heading.level > currentLevel) {
                // add our parent to the stack
                stack.push(headings[headings.length - 1]);
            }

            if (stack.length === 0) {
                // if the stack is empty, we go here
                headings.push(heading);
            }
            else {
                // we get added to our parent
                stack[stack.length - 1].children.push(heading);
            }

            // remember for next time around the loop
            currentLevel = heading.level;
        }

        // all done
        return headings;
    },

    getTocSites: function() {
        var tocSite = $l(["[data-type='ishi-toc']"]);
        return tocSite;
    },

    hasTocSite: function() {
        var tocSite = Ishi.toc.getTocSites();
        if (!tocSite) {
            return false;
        }

        return true;
    },

    onReady: function() {
        // do we have somewhere to insert the TOC?
        if (!Ishi.toc.hasTocSite()) {
            // nothing to do
            return;
        }

        var tocSites = Ishi.toc.getTocSites();
        for (var i = 0; i < tocSites.length; i++) {
            var maxDepth = $l.dom.attr(tocSites[i], 'data-max-depth');
            maxDepth = maxDepth ? maxDepth : 3;

            var headings = Ishi.toc.findHeadings(maxDepth);
            var toc = Ishi.toc.buildToc(headings);

            tocSites[i].appendChild(toc);
        }

        return;
    },
};
