import {post} from '../utils/request'

// 用户登录
export function loginApi(user){
    return post ("/api/vi/auth/manager_login",user);
}