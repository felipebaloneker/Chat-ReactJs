import avatar from '../../assets/images/avatar.jpg'
import './styles.css'

type ULProps ={
    userName:string |null;
    id:string|null;
    onClick?:()=> Promise<void>
}
function UserLine({onClick,userName,id}:ULProps){
    return(
        <button className="user-line"
        onClick={onClick}
        >
            <h2 className='user-avatar'>{userName?.slice(0,1).toUpperCase()}</h2>
            <p>{userName}</p>
        </button>
    )
}
export default UserLine