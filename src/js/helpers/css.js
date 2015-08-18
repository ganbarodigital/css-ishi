module.exports = {
    getClassNames: function(el) {
        return el.className.split(' ');
    },

    hasClass: function(el, className) {
        var classes = Ishi.css.getClassNames(el);

        return classes.indexOf(className) !== -1;
    }
};
