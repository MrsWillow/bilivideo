export default {
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
