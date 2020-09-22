import axios from './../utils/myaxios';

//请求获取角色

export  function GetRole(){
    return axios ({
        method:'GET',
        url:'/serversystem/GetRole',      
    })
}
