import {get ,post,put,del} from '../utils/request'


// 获取商品列表
export function listApi (page=1){
    return get ('/api/v1/admin/products',{page,per:10})//页码,每页显示十条数据
}

// 创建数据
export function createApi(data){
    return post ("/api/v1/admin/products".data);
}

//根据ID获取数据
export function getOneById(id) {
    return get ('/api/v1/products/${id}');
    
}

// 修改记录
export function modifyOne(id,data){
    return put("/api/v1/admin/products/${id}",data)
}

// 删除
export function delOne(id,data){
    return del('/api/v1/admin/products/${id}')
}