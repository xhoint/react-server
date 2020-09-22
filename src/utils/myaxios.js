import axios from'axios'

//后端基础路径
axios.defaults.baseURL="http://www.topologys.com.cn:9090"


// //请求拦截器

// axios.interceptors.request.use(function (config){
//     console.log('aaaa');
//     return config 
// }),function (error){
//     console.log(error);
//     return Promise.reject(error)
// }

export default axios