import Vue from 'vue';
import router from './router'
import store from './store'

import Index from './components/Index'

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        Index,
    },
    router,
    store
});
