import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import modulesA from "./modules/modulesA";
const state = {
    count: 100,
    students: [
        {age: 10,name: 1},
        {age: 20,name: 1},
        {age: 30,name: 1},
    ]
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: modulesA,
    }
})
export default store
