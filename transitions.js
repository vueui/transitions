
/**
 * transition definition
 *
 * @param {String} name - Animation settings to use
 */

exports.defineEmphasis = function (name, duration) {

    return {
        beforeEnter: function (el) {
            $(el).show();
        },

        enter: function (el, done) {
            $(el).transition(name, duration, done);

            return function() {
                $(el).transition('stop');
            }
        },

        leave: function (el, done) {
            $(el)
                .transition('reset')
                .transition(name, duration, done)
                .hide();

            return function() {
                $(el).transition('stop');
            }
        }
    };
};


/**
 * transition definition
 *
 * @param {String} name - Animation name to use
 */

exports.defineAppearance = function (name, duration) {

    return {
        enter: function (el, done) {
            $(el)
                .transition('reset')
                .transition(name + ' in', duration, done);

            return function() {
                $(el).transition('stop');
            }
        },

        leave: function (el, done) {
            $(el)
                .transition('reset')
                .transition(name + ' out', duration, done);

            return function() {
                $(el).transition('stop');
            }
        }
    };
};