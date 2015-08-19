/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var Ishi = {
	    css: __webpack_require__(1),
	    dom: __webpack_require__(2),
	    navbar: __webpack_require__(3),
	    navbars: __webpack_require__(4),
	    toc: __webpack_require__(5),
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	    getClassNames: function(el) {
	        return el.className.split(' ');
	    },

	    hasClass: function(el, className) {
	        var classes = Ishi.css.getClassNames(el);

	        return classes.indexOf(className) !== -1;
	    }
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

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
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
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
	            Ishi.dom.showItem(dropdownEl);
	        }
	        else {
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

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

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

	    getTocSite: function() {
	        var tocSite = $l("[data-type='ishi-toc']");
	        return tocSite;
	    },

	    hasTocSite: function() {
	        var tocSite = Ishi.toc.getTocSite();
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

	        var tocSite = Ishi.toc.getTocSite();
	        var maxDepth = $l.dom.attr(tocSite, 'data-max-depth');
	        maxDepth = maxDepth ? maxDepth : 3;
	        var headings = Ishi.toc.findHeadings(maxDepth);
	        var toc = Ishi.toc.buildToc(headings);
	        tocSite.appendChild(toc);

	        return;
	    },
	};


/***/ }
/******/ ]);