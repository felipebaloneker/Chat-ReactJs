import './styles.css'
import { useAuth } from '../../hooks/useAuth'
import ChatSelected from '../ChatSelected'

type User = {
    id:string|null;
    name:string|null;
}

type IProps ={
    openChat:boolean;
    setOpenMobileList:Function;
    user2:User|undefined;
    chat_id:string;
}

function MobileChatWindow({openChat,setOpenMobileList,user2,chat_id}:IProps){
    const {user} = useAuth()
    
if(user){
    return(
        <div className='mobile-chat-window'>  
           {openChat ? 
           (
               <ChatSelected
               openChat={openChat}
               user2={user2}
               chat_id={chat_id}
               />
           ):
           (
               <div className="mobile-chat-init">
                   <div className="mobile-chat-wrp">
                       <h2>Começe uma nova conversa!</h2>
                       <p>selecione um usuario na lista.</p>
                   </div>
               </div>
           )}
        </div>
    )
}
return(
    <></>
)
}
export default MobileChatWindow;