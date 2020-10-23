// 自己封装的消息提示
import {Message} from "element-ui"
export const messages = function(type , message){
    Message({
        type:type,
        message:message
    })
}