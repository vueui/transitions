
var domReady     = require('domready'),
    Vue          = require('vue'),
    transitions = require('..')

Vue.use(transitions)

domReady(function () {
     
     window.app = new Vue().$mount('#app')
     window.Vue = Vue
     
});
