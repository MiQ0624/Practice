import axios from 'axios';
import {getToken} from './auth'

//自定义封装方法

const instance =axios.create({
    baseURL:'http://localhost:3000',//f服务器端地址
    timeout:5000  //请求超时时间

})

//全局请求拦截，发送请求之前执行
instance.interceptors.request.use (function(config){
    config.headers['authorization']='Bearer'+getToken()
    return config;
},function(error){
    return Promise.reject(error);
})

// 全局响应拦截，请求返回之后执行
instance.interceptors.response.use (function(response){
    return response.data;
},function(error){
    return Promise.reject(error);
})

// get请求,params为url传参
export function get (url,params){
    return axios.get(url,{
        params
    })
}

//post请求URL和数据
export function post(url,data){
    return axios.post(url,data)
}

//put请求
export function put (url,data){
    return axios.put(url,data)
}

export function del(url){
    return axios.delete(url)
}
