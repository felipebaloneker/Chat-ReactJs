import { useState } from 'react';
import ChatUserList from '../../components/ChatUserList';
import ChatWindow from '../../components/ChatWindow';
import MobileUserList from '../../components/MobileUserList';
import MobileChatWindow from '../../components/MobileChatWindow';
import './styles.css';

type User = {
    id:string|null;
    name:string|null;
}
function Chat(){
    const [openChat,setOpenChat] = useState(false);
    const [user2,setUser2] = useState<User>();
    const [chatId,setChatId] = useState('');
    const [openMobileList,setOpenMobileList] = useState(true);

    return(
        <div className="landing-wrapper">
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
            <div className="mobile-chat">
                {openMobileList ? 
                    (
                        <MobileUserList
                        key={''}
                        setOpenChat={setOpenChat}
                        setOpenMobileList={setOpenMobileList}
                        setUser2={setUser2}
                        setChatId={setChatId}
                        />
                    )
                    :
                    (
                        <MobileChatWindow
                        setOpenMobileList={setOpenMobileList}
                        openChat={openChat}
                        user2={user2}
                        chat_id={chatId}
                        />
                    )}
            </div>
        </div>
    )
}
export default Chat