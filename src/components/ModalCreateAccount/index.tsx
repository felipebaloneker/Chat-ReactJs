import { useState } from 'react';
import Api from '../../services/Api';
import './styles.css';

type Iprops = {
    openModal: boolean;
    setOpen:(arg:boolean) => void;
}

function ModalCreateAccount({setOpen, openModal}:Iprops){
    const [userName,setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const createUser = async()=>{
        const user = await Api.createUser(userName,email,password)
        if(user){window.alert('Conta Criada')}
        setOpen(false)
        return user
    }
    return(
        <div className='modal'
        style={{display: openModal ? 'flex':'none'}}
        >
            <div className='modal-content'>
                <div className='modal-header'>
                <button
                className='closeModal'
                onClick={()=> setOpen(false)}
                >
                    X
                </button>
                </div>
                <div className='modal-body'>
                    <span>Criar Conta</span>
                    <input type="email" 
                    autoFocus
                    required
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                    placeholder="Nome"
                    />  
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
                    <button className='login-btn'
                    onClick={createUser}
                    >Cadastrar</button>
                </div>
            </div>
        </div>
    )
}
export default ModalCreateAccount