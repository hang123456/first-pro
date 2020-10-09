import {request} from './request'
export function getHomeMultidata(){
    return request({
        url: '/home/multidata'
    })
}
export function tabbarnav(type, page){
    return request({
        url: '/home/data',
        parmas: {
            type,
            page
        }
    })
}