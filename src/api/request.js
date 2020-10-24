import axios from "axios"
import router from "../router/index"
import {
    Loading
} from "element-ui"
import {
    messages
} from "../assets/js/common.js"
import store from "../store/index"

axios.defaults.timeout = 60000; // axios请求的超时时间
axios.defaults.baseURL = "http://rap2api.taobao.org/app/mock/269054"; // 这里是写需要发送的服务器地址
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

let loading = null

/**
 * 设置拦截请求
 * 用于处理发送请求之前的事情
 */
axios.interceptors.request.use(
    config => {
        loading = Loading.service({
            text: "正在加载中......",
            fullscreen: true
        })
        if (store.state.token) {
            config.headers["Authorization"] = store.state.token
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
/**
 * 设置响应拦截
 * 用于处理数据返回后的操作
 */
axios.interceptors.response.use(
    response => {
        //请求成功后关闭加载
        if (loading) {
            loading.close()
        }
        if (response.status === 200) {
            return response;
        }
    },

    error => {
        console.log(error);
        //请求成功后关闭加载
        if (loading) {
            loading.close()
        }
        //断网处理或者请求超时
        if (!error.response) {
            //请求超时
            if (error.message.includes("timeout")) {
                console.log("超时了");
                messages("error", "请求超时，请检查互联网连接");
            } else {
                //断网，可以展示断网组件
                console.log("断网了");
                messages("error", "请检查网络是否已连接");
            }
            return;
        }
        const status = error.response.status;
        switch (status) {
            case 500:
                messages("error", "服务器内部错误");
                break;
            case 404:
                messages(
                    "error",
                    "未找到远程服务器"
                );
                break;
            case 401:
                messages("warning", "用户登陆过期，请重新登陆");
                store.state.commit('COMMIT_TOKEN', '')
                setTimeout(() => {
                    router.replace({
                        path: "/login",
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000);
                break;
            case 400:
                messages("error", "数据异常，详情请咨询聚保服务热线");
                break;
            default:
                messages("error", error.response.data.message);
        }
        return Promise.reject(error);
    }
)

//get 请求
function post(url, data) {

    return axios({
        url: url,
        method: 'POST',
        data: data
    })
}
//post 
function get(url, params) {

    return axios({
        url,
        method: 'GET',
        params
    })
}
export {
    post,
    get
};