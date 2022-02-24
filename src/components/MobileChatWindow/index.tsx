import './styles.css'
import { useAuth } from '../../hooks/useAuth'
import ChatSelected from '../ChatSelected'
import { IoIosArrowRoundBack } from "react-icons/io";

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
               setOpenMobileList={setOpenMobileList}
               />
           ):
           (
               <div className="mobile-chat-init">
                   <div className="mobile-chat-wrp">
                       <h2>Começe uma nova conversa!</h2>
                        <button className='mobile-icon-back'
                        onClick={()=> {setOpenMobileList(true)}}
                        ><IoIosArrowRoundBack size={25}/>selecione um usuario na lista.</button>
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