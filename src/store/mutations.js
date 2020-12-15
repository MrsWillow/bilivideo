import { ADDCOUNT } from "./mutations-types";

export default {
    // addCount(state) {
    //     state.count ++
    // }
    [ADDCOUNT](state) {
        state.count ++
    }
}
