var Ishi = {
    dom: {
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

            return (
                item_rect.top >= parent_rect.top &&
                item_rect.left >= parent_rect.left &&
                item_rect.bottom <= Math.min(parent_rect.bottom, document.documentElement.clientHeight) &&
                item_rect.right <= Math.min(parent_rect.right, document.documentElement.clientWidth)
            );
        }
    },

    navbar: {
        nextId: 0,

        getNextDropdownId: function() {
            Ishi.navbar.nextId = Ishi.navbar.nextId + 1;
            return "ishi_navbar_" + Ishi.navbar.nextId;
        },

        addMore: function(navEl, dropdownId) {
            var listEl = $l("ul", navEl);
            var moreEl = $l.dom.create(
                '<li class="more"><a href="#" onclick="Ishi.navbar.toggleDropdown(\'' + dropdownId + '\')">More...</a></li>'
            );

            listEl.appendChild(moreEl);
        },

        getMore: function(navEl) {
            return $l("li.more", navEl);
        },

        hasMore: function(navEl) {
            if (Ishi.navbar.getMore(navEl)) {
                return true;
            }

            return false;
        },

        removeMore: function(navEl) {
            var moreEl = Ishi.navbar.getMore(navEl);
            if (!moreEl) {
                return;
            }

            // tell the item to delete itself
            moreEl.remove();
        },

        addDropdown: function(navEl, dropdownId) {
            // create our (initially hidden) dropdown menu
            var dropdownEl = $l.dom.create(
                '<div class="navbar_dropdown hidden" style="z:9999" id="' + dropdownId + '"><ul></ul></div>'
            );

            var dropdownListEl = $l("ul", dropdownEl);

            // add all the 'hidden' items from the navbar to the dropdown
            var hiddenItems = $l([".hidden"], navEl);
            $l.each(hiddenItems, function(i, origItem) {
                var item = $l.dom.clone(origItem);
                dropdownListEl.appendChild(item);
                Ishi.dom.showItem(item);
            });

            // add our dropdown to the page
            if (navEl.nextSibling !== null) {
                navEl.parentNode.insertBefore(dropdownEl, navEl.nextSibling);
            }
            else {
                navEl.parentNode.appendChild(dropdownEl);
            }
        },

        removeDropdown: function(dropdownId) {
            var dropdownEl = $l.id(dropdownId);
            if (!dropdownEl) {
                return;
            }

            // tell the item to delete itself
            dropdownEl.remove();
        },

        showDropdown: function(dropdownId) {
            var dropdownEl = $l.id(dropdownId);
            if (!dropdownEl) {
                return;
            }

            Ishi.dom.showItem(dropdownEl);
        },

        toggleDropdown: function(dropdownId) {
            var dropdownEl = $l.id(dropdownId);
            if (!dropdownEl) {
                return;
            }

            if (Ishi.dom.isHidden(dropdownEl)) {
                Ishi.dom.showItem(dropdownEl);
            }
            else {
                Ishi.dom.hideItem(dropdownEl);
            }
        },
    }
};

var ishi_navbars_reflow = function() {
    // find all of our navbars
    var navbars = $l(["nav.navbar"]);

    // reflow each of them
    $l.each(navbars, function(i, navbar) {
        ishi_navbar_reflow(navbar);
    });
};

var ishi_navbar_reflow = function(navbar) {
    // the items in our topbar
    var navbar_items = $l(["li"], navbar);

    // step 1 - make them all displayed again
    Ishi.navbar.removeMore(navbar);
    $l.each(navbar_items, function(i, item) {
        Ishi.dom.showItem(item);
    });

    // if everything is visible, nothing to do
    if (Ishi.dom.areOnScreen(navbar_items, navbar)) {
        return;
    }

    // find the last navbar item that is visible
    var lastVisible = 0;
    for (var i = 0; i < navbar_items.length; i++) {
        if (Ishi.dom.isOnScreen(navbar_items[i], navbar)) {
            lastVisible = i;
            continue;
        }

        // if we get here, we have our first item that isn't completely
        // visible
        break;
    }

    // hide the invisible items
    //
    // we also hide the last visible item, to make room for our 'More'
    // menu item
    for (i = lastVisible; i < navbar_items.length; i++) {
        Ishi.dom.hideItem(navbar_items[i]);
    }

    // add the 'hidden' links into our dropdown menu
    var dropdownId = Ishi.navbar.getNextDropdownId();
    Ishi.navbar.addDropdown(navbar, dropdownId);

    // add the menu item
    Ishi.navbar.addMore(navbar, dropdownId);

};

var ishi_navbars_reflow_throttler;

var ishi_navbars_delayed_reflow = function() {
    if ( !ishi_navbars_reflow_throttler ) {
        ishi_navbars_reflow_throttler = setTimeout(function() {
            ishi_navbars_reflow_throttler = null;
            ishi_navbars_reflow();
       }, 1000);
    }
};

$l.ready(function() {
    ishi_navbars_reflow();
});

$l.dom.setEvent(
    window,
    'orientationchange',
    ishi_navbars_delayed_reflow
);

$l.dom.setEvent(
    window,
    'resize',
    ishi_navbars_delayed_reflow
);
