import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        some: () => import('./modules/some.js')
    }
})
