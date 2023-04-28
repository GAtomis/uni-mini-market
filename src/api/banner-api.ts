import http from '@/utils/request.api'

export function getBannerList(){
    return http('/banner/getBannerList')
}