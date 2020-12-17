import axios from 'axios'
// export function request(config,success,failure) {
//     // 创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 5000
//     })
//     // 发送网络请求
//     instance(config)
//         .then(res => {
//             success(res)
//         })
//         .catch(err => {
//             failure(err)
//         })
// }

// export function request(config) {
//     return new Promise((resolve,reject) => {
//         const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 5000
//     })
//     // 发送网络请求
//     instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

export function request(config) {
    // 1 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    //2 axios拦截器
    // 请求拦截     成功 | 失败
    instance.interceptors.request.use(config => {
        console.log(config);
        /*
            1.比如config中的一些信息不符合服务器的要求
            2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
            3.某些网络请求(比如登录)必须携带特殊信息
        */

        // 把config拦截下来,请求的时候就拿不到config,因此需要return
        return config
    },err => {
        console.log(err);
    })

    // 响应拦截     成功 | 失败
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data
    },err => {
        console.log(err);
    })

    // 3 发送网络请求
    return instance(config)
}
