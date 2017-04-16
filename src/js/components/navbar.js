module.exports = {
    nextId: 0,

    getNextDropdownId: function() {
        Ishi.navbar.nextId = Ishi.navbar.nextId + 1;
        return "ishi_navbar_" + Ishi.navbar.nextId;
    },

    addBurger: function(navEl, dropdownId) {
        var listEl = $l("ul", navEl);
        var moreEl = $l.dom.create(
            '<li class="more"><a href="#" onclick="Ishi.navbar.toggleDropdown(\'' + dropdownId + '\')"><i class="fa fa-bars fa-lg"></i></a></li>'
        );

        listEl.appendChild(moreEl);

        return $l(".more", listEl);
    },

    addMore: function(navEl, dropdownId, text) {
        text = text || "More...";
        var listEl = $l("ul", navEl);
        var moreEl = $l.dom.create(
            '<li class="more"><a href="#" onclick="Ishi.navbar.toggleDropdown(\'' + dropdownId + '\')">' + text + '</a></li>'
        );

        listEl.appendChild(moreEl);

        return $l(".more", listEl);
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
            '<div class="navbar_dropdown hidden" id="' + dropdownId + '"><ul></ul></div>'
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

    removeAllDropdowns: function() {
        var dropdownEls = $l([".navbar_dropdown"]);
        if (!dropdownEls) {
            return;
        }
        for(var i = 0; i < dropdownEls.length; i++) {
            dropdownEls[i].remove();
        }
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
            // special case
            //
            // the parent flex container may have 'flex-wrap: nowrap'
            // to force the menu to collapse in the first place
            //
            // we need to check for that, and remove it, otherwise our
            // dropdown will look terrible
            var parentEl = dropdownEl.parentNode;
            if ($l.css.getProperty(parentEl, 'flex-wrap') == 'nowrap') {
                $l.css.setProperty(parentEl, 'flex-wrap', 'wrap');
                $l.dom.data(dropdownEl, 'ishi-stop-wrap', 1);
            }
            Ishi.dom.showItem(dropdownEl);
        }
        else {
            if ($l.dom.data(dropdownEl, 'ishi-stop-wrap') == 1) {
                $l.css.setProperty(dropdownEl.parentNode, 'flex-wrap', 'nowrap');
            }
            Ishi.dom.hideItem(dropdownEl);
        }
    },

    reflow: function(navbar) {
        // the items in our topbar
        var navbar_items = $l(["li"], navbar);

        // step 1 - make them all displayed again
        Ishi.navbar.removeMore(navbar);
        $l.each(navbar_items, function(i, item) {
            Ishi.dom.showItem(item);
        });

        // if everything is visible, nothing to do
        if (Ishi.dom.lastIsOnScreen(navbar_items, navbar)) {
            return;
        }

        // add the menu item
        //
        // we have to add this first to make sure it fits on the screen when
        // we're hiding items from the menu
        var dropdownId = Ishi.navbar.getNextDropdownId();
        moreEl = Ishi.navbar.addMore(navbar, dropdownId);

        // hide the items that are overflowing
        //
        // we work backwards from the end of the list to work around a problem
        // with Firefox
        for (var i = navbar_items.length - 1; i >= 0; i--) {
            if (!Ishi.dom.isOnScreen(moreEl, navbar)) {
                // hide it, so that the browser can reflow the navbar
                Ishi.dom.hideItem(navbar_items[i]);
            }
            else {
                break;
            }
        }

        // add the 'hidden' links into our dropdown menu
        Ishi.navbar.addDropdown(navbar, dropdownId);
    },
};