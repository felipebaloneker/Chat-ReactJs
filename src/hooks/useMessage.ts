import { useEffect, useState } from 'react'
import Api from '../services/Api'
type MessageProps = Record<string,{
    id:string;
    author_id:string;
    chat_id:string;
    message:string;
    created_at:string;
}>
type resProp = {
    data:MessageProps;
}
type Message = {
    id:string;
    author_id:string;
    chat_id:string;
    message:string;
    created_at:string;
}
export function useMessage(chat_id:string){
    const [messages, setMessages] = useState<Message[]>([])
    useEffect(()=>{
     const timer = setInterval(()=>{
        Api.getChatMessage(chat_id).then(function(item:resProp|any){
            const dataMessage:MessageProps = item.data ?? {};
                const parsed = Object.entries(dataMessage).map(([key,value])=>{
                    return{
                        id:value.id,
                        author_id:value.author_id,
                        chat_id:value.chat_id,
                        message:value.message,
                        created_at:value.created_at
                    }
                })
                setMessages(parsed)
    
            }).catch(err => {console.log(err)})
     },1000)
     return ()=> clearInterval(timer)
    })
    return {messages}
}