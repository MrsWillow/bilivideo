export default {
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
