import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100,
        students: [
            {age: 10,name: 1},
            {age: 20,name: 1},
            {age: 30,name: 1},
        ]
    },
    mutations: {
       addCount(state) {
           state.count ++
       }
    },
    getters: {
        powerCount(state) {
            return state.count * state.count
        },
        powerCount1(state,getters) {
            return state.count + getters.powerCount
        },
        moreAge(state) {
            // age 是传递过来的值
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    }
})
export default store
