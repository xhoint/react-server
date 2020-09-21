import axios from './../utils/myaxios';

//请求获取角色

export  const userList=()=>{
    return axios ({
        method:'GET',
        url:'/serversystem/GetRole'
    })
}
