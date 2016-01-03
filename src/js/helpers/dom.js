module.exports = {
    isHidden: function(item) {
        if ($l.css.hasClass(item, "hidden")) {
            return true;
        }

        return false;
    },

    hideItem: function(item) {
        $l.css.addClass(item, "hidden");
    },

    showItem: function(item) {
        $l.css.removeClass(item, "hidden");
    },

    areOnScreen: function (items, parent) {
        parent = parent ? parent : window;

        if (!$l.each(items, function(i, item) {
            return Ishi.dom.isOnScreen(item, parent);
        })) {
            return false;
        }
    },

    isOnScreen: function (item, parent) {
        parent = parent ? parent : window;

        var item_rect = item.getBoundingClientRect();
        var parent_rect = parent.getBoundingClientRect();

        // we have to round these numbers because Firefix returns floats
        return (
            Math.round(item_rect.top) >= Math.round(parent_rect.top) &&
            Math.round(item_rect.left) >= Math.round(parent_rect.left) &&
            Math.round(item_rect.bottom) <= Math.round(Math.min(parent_rect.bottom, window.innerHeight)) &&
            Math.round(item_rect.right) <= Math.round(Math.min(parent_rect.right, window.innerWidth))
        );
    },

    lastIsOnScreen: function (items, parent) {
        parent = parent ? parent : window;

        return Ishi.dom.isOnScreen(items[items.length - 1], parent);
    },

    getHeadingLevel: function(el) {
        if (el.tagName === 'H1') {
            return 1;
        }
        if (el.tagName === 'H2') {
            return 2;
        }
        if (el.tagName === 'H3') {
            return 3;
        }
        if (el.tagName === 'H4') {
            return 4;
        }
        if (el.tagName === 'H5') {
            return 5;
        }
        if (el.tagName === 'H6') {
            return 6;
        }

        // if we get here, we have run out of ideas
        return -1;
    },

    getWidth: function(el) {
        var el_rect = el.getBoundingClientRect();

        return Math.round(el_rect.width);
    },

    getWidthOfHidden: function(origEl) {
        // we need to create a clone, add it to the DOM (so that it is rendered)
        // before we can get the width
        var el = Ishi.dom.createHiddenClone(origEl);

        // our return value :)
        var width = Ishi.dom.getWidth(el);

        // tidy up
        el.remove();

        // all done
        return width;
    },

    createHiddenClone: function(origEl) {
        var el = $l.dom.clone(origEl);
        $l.css.setProperty(el,  {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        });
        $l.css.removeClass(el, 'hidden');

        document.body.insertBefore(
            el,
            document.body.firstChild
        );

        // all done
        return el;
    }
};
