import './styles.css'
import { useAuth } from '../../hooks/useAuth'
import ChatSelected from '../ChatSelected'
type User = {
    id:string|null;
    name:string|null;
}

type IProps ={
    openChat:boolean;
    user2:User|undefined;
    chat_id:string;
}

function ChatWindow({openChat,user2,chat_id}:IProps){
    const {user} = useAuth()
    
if(user){
    return(
        <div className='chat-window'>  
           {openChat ? 
           (
               <ChatSelected
               openChat={openChat}
               user2={user2}
               chat_id={chat_id}
               />
           ):
           (
               <div className="chat-init">
                   <div className="chat-wrp">
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
export default ChatWindow