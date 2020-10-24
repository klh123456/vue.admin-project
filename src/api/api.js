import {get , post} from "./request"
// 登录接口
export const login = function(login){
    return post("/login",login)
}   //login 代表往后台

//上传
export const  upload=(upload)=>get('/api/get/upload',upload)