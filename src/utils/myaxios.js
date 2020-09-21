import axios from'axios'
import { config } from 'vue/types/umd'

//后端基础路径
axios.defaults.baseURL="http://www.topologys.com.cn:9090"


//请求拦截器

axios.interceptors.request.use((config)=>{
    console.log('aaaa');
    return config 
}),error=>{
    console.log(error);
    return Promise.reject(error)
}

export default axios