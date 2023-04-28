import vxios from '@gatomis/vxios'

const getUrl=()=>{
    console.log(import.meta.env);
    return import.meta.env.VITE_BASE_PATH+':'+import.meta.env.VITE_SERVER_PORT
    
}

const apiUrl=import.meta.env.VITE_BASE_API  as string
const myVxios = vxios.create({
    baseURL:getUrl() ,
    timeout: 1000,
})

// 添加请求拦截器
myVxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('config',config);
    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myVxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myVxios