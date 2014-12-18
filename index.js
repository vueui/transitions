/**
 * Register transitions using Vue.transition
 */

var transitions = require('./transitions');

var emphasis = [
    'flash',
    'shake',
    'pulse',
    'tada',
    'bounce'
];

var appearance = [
    'slide up',
    'slide down',
    'vertical flip',
    'horizontal flip',
    'fade',
    'fade up',
    'fade down',
    'scale',
    'drop',
    'browse'
];


/**
 * Register all transitions globally
 *
 * @param Vue
 */

module.exports = function (Vue, options) {

    var duration = (options || {}).duration || 700;

    emphasis.forEach(function (animation) {
        var definition = transitions.defineEmphasis(animation, duration);

        Vue.transition(animation, definition);
    });

    appearance.forEach(function (animation) {
        var definition = transitions.defineAppearance(animation, duration);
        var id = animation.split(' ').join('-');

        Vue.transition(id, definition);
    });

};