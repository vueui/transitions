
var domReady    = require('domready'),
    Vue         = require('vue'),
    transitions = require('..')

Vue.use(transitions)

domReady(function () {

    window.app = new Vue({
        data: {
            showPage: true,
            players: [],
            teams: []
        }
    }).$mount('#app')
    window.Vue = Vue

    /**
     * Transition triggers
     */

    setTimeout(function () {
        app.players.push('mascherano');
        app.teams.push('F.C. Barcelona');

        setTimeout(function () {
            app.players.push('pique');
            app.teams.push('Chelsea');

            setTimeout(function () {
                app.players.push('xavi');
                app.teams.push('Borussia Dortmund');

            }, 1000);
        }, 1000);
    }, 1000);

    setTimeout(function () {
        app.showPage = false
    }, 3500)

});
