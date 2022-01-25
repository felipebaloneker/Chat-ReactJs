import { useState } from 'react';
import ChatUserList from '../../components/ChatUserList'
import ChatWindow from '../../components/ChatWindow'

import './styles.css'

type User = {
    id:string|null;
    name:string|null;
}
function Chat(){
    const [openChat,setOpenChat] = useState(false);
    const [user2,setUser2] = useState<User>()
    const [chatId,setChatId] = useState('')
    return(
        <div className='chat'>
            <ChatUserList
            key={''}
            setOpenChat={setOpenChat}
            setUser2={setUser2}
            setChatId={setChatId}
            />
            <ChatWindow
            openChat={openChat}
            user2={user2}
            chat_id={chatId}
            />
        </div>
    )
}
export default Chat