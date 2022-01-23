import './styles.css'
import UserLine from '../../components/UserLine'
import {useAuth} from '../../hooks/useAuth'
import {useList} from '../../hooks/useList'
import Api from '../../services/Api'
import { IoIosArrowDown } from "react-icons/io";
import {useNavigate} from 'react-router-dom'

import { useState } from 'react'
type IProps ={
    setOpenChat:Function;
    setUser2:Function;
    setChatId:Function;
}
type ULProps ={
    name:string |null;
    id:string|null;
}
function ChatUserList({setOpenChat,setUser2,setChatId}:IProps){
    const {user,setUser} = useAuth()
    const user_id = user?.id;
    const {list} = useList()
    const [option,setOption] = useState(false);
    const navigate = useNavigate()
    const clickOpenChat = async(data:ULProps)=>{
        const chat_id = await Api.createChat(user_id,data.id)
        if(!chat_id){return}
        setChatId(chat_id)
        setOpenChat(true)
        setUser2(data)
    }
    
    const openOption = async()=>{
        if(option){
            setOption(false)
        }
        else{setOption(true)}
    }
    const logOutUser = async()=>{
        localStorage.clear()
        setUser('')
        navigate('/')
        
    }

    if(user && list){
        return(
            <div className='chat-userlist'>
               <div className="list-header">
                    <UserLine userName={user.name} id={user.id}
                    onClick={()=> openOption()}
                    />
                    <p className='icon-options'><IoIosArrowDown/></p>
               </div>
               <div className="user-options"
                    style={{display: option ? "block" : "none"}}
                    >
                    <button
                    onClick={logOutUser}
                    >Sair</button>
                </div>
               <div className="list-body">
                   {list.map(item =>{
                       if(item.id !== user.id ){
                        return(
                            <UserLine 
                            userName={item.name} 
                            id={item.id}
                            onClick={() =>clickOpenChat(item)}
                            />
                            )
                       }
                   })}
               </div>
            </div>
        ) 
    }
return(
    <></>
)
}
export default ChatUserList