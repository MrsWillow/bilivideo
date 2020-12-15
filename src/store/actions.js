import {ADDCOUNT} from "./mutations-types";

export default {
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
}
