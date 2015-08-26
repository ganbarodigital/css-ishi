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
	    fastclick: __webpack_require__(3),
	    navbar: __webpack_require__(4),
	    navbars: __webpack_require__(5),
	    pageflow: __webpack_require__(6),
	    toc: __webpack_require__(7),
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
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

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

/***/ },
/* 7 */
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