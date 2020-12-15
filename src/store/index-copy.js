import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { ADDCOUNT } from "./mutations-types";
const modulesA = {
    state: {
        name: 'pig'
    },
    mutations: {},
    getters: {
        getName(state) {
            return state.name + 'hhh'
        },
        getFullName(state,getters,rootState) {
            return getters.getName + rootState.count
        }
    }
}
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
       // addCount(state) {
       //     state.count ++
       // }
        [ADDCOUNT](state) {
            state.count ++
        }
    },
    actions: {
        // context  上下文
        // add(context) {
        //     setTimeout(() => {
        //         context.commit(ADDCOUNT)
        //     },1000)
        // }
        // actions 的 commit 只针对于当前的mutations,分模块之后只提交当前模块
        add(context,payload) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    context.commit(ADDCOUNT)
                    console.log(payload)
                    resolve('hhh')
                },1000)
            })
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
    },
    modules: {
        a: modulesA,
    }
})
export default store
