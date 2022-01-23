import { useAuth } from "../../hooks/useAuth";
import './styles.css'
type IMessageProps ={
    author:string;
    message:string;
    time:string;
}

function MessageItem({author,message,time}:IMessageProps){
    const {user} = useAuth()

return (
    <div className="message-line"
        style={{
            justifyContent:user?.id == author ? 'flex-end': "flex-start"
        }}
    >
        <div className="message-body"
                style={{
                    alignItems:user?.id == author ? 'flex-end': "flex-start"
                }}
        >
            <div className="message-text"
                     style={{
                        backgroundColor:user?.id == author ? '#54D38A': "#363E47"
                    }}>{message}</div>
            <div className="message-time">{time.split("T").pop()}</div>
        </div>
    </div>
)
}
export default MessageItem;