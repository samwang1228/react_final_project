import axios from 'axios';

const userRequest = axios.create({
    baseURL:'https://final-project-webprograming.herokuapp.com/createdata/'
});

export const apiLogin = function(username,password){
    return (userRequest.get('/login',{
        params:{
            user_id:username,
            password:password,
            login_check:'True',
        }
    }));
}

export const apiRegister = function(user_id,nickname,password){
    return (userRequest.get('/adduser',{
        params:{
            user_id:user_id,
            nickname:nickname,
            password:password,
            login_check:'False',
        }
    }));
}

export const apiSendMessage = function(user_id,nickname,message){
    return (userRequest.get('/add_room_detail',{
        params:{
            user_id:user_id,
            nickname:nickname,
            content:message,
            room_id:'1',
            room_title:'test',
        }
    }));
}

export const apiGetMessage = function(){
    return (userRequest.get('/room_content',{
        params:{}
    }));
}

export const apiGetMember = function(){
    return (userRequest.get('/user',{
        params:{}
    }));
}