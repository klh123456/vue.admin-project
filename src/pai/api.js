import {get, post} from "./request"
// 登录接口
export const login = (login)=>post('api/post/user/login',login)   //login 代表往后台

