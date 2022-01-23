import database from './database';
export default{
    getUserList:async()=>{
        const uselist = await database.get('/users/list')
        .then(function(res){
            return res
        }).catch(err =>{
            console.log(err)
        })
        return uselist;
    },

    createChat:async(user_id:string|null|undefined,user_two:string|null)=>{
    const token = localStorage.getItem('token')?.replace(/"/g,"")
        const chat = await database.post('/chat/create',{
            user_one:user_id,
            user_two:user_two
        },{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res.data.id
        }).catch(err=>{console.log('Error!!'+err)})
        return chat
    },

    sendMessage:async(text:string,chat_id:string)=>{
    const token = localStorage.getItem('token')?.replace(/"/g,"")
        const msg = await database.post('/message/send',{
            chat_id:chat_id,
            message:text
        },{headers: {'Authorization': `Bearer ${token}`}})
        return msg
    },

    getChatMessage:async(chat_id:string)=>{
        const list = await database.get(`/chat/messages?chat_id=${chat_id}`)
        .then(function(res){return res})
        .catch(err => console.log(err))
        return list
    }
    
}