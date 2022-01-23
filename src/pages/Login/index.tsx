import { useState } from "react"
import ModalCreateAccount from "../../components/ModalCreateAccount"
import './styles.css'
import Api from '../../services/Api'
import {useAuth} from '../../hooks/useAuth'
import {useNavigate} from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState('')
    const [password,setPassword]= useState('')
    const token = localStorage.getItem('token')
    const [openModal,setOpenModal] = useState(false)
    const {user,login} =  useAuth()
    const navigate = useNavigate()

    if(user && token !== undefined){
        navigate('/chat')
    }
    const loginClick = async() =>{
        await login(email,password)
    }

    return(
        <section className='login'>
            <div className='text-wrp'>
                <h2 className=''>React Chat</h2>
                <p className=''>Um lugar para se divetir com amigos!</p>
            </div>
            <div className='login-container'>
                <div className='login-header'>
                    <span>Login</span>
                </div>
                <input type="email" 
                autoFocus
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                />                
                <input type="password" 
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password"
                />
                <div className='login-buttons'>
                <button className="login-btn"
                onClick={()=>loginClick()}
                >Entrar</button>
                <button className="login-btn"
                onClick={()=> setOpenModal(true)}
                >Criar Conta</button>
                </div>     
            </div>
            <ModalCreateAccount
            openModal={openModal}
            setOpen={setOpenModal}
            />
        </section>
    )
}
export default Login