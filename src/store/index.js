import Vue from 'vue'
import Vuex from 'vuex'
import rides from './modules/rides'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        rides,
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})