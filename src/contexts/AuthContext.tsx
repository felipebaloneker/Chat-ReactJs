import { createContext,ReactNode,useEffect, useState } from "react"
import database from '../services/database'

type User = {
    id:string|null;
    name:string|null;
}

type ContextType ={
    user:User| undefined;
    userToken:string;
    login:(email: string, password: string) => Promise<void>|any;
    setUser:Function;
}

type AuthContextProps ={
    children:ReactNode;
}

export const AuthContext = createContext({} as ContextType) 
export function AuthContextProvider(props:AuthContextProps){
    const [user,setUser] = useState<User>()
    const [userToken,setUserToken] = useState('')
    
    useEffect(()=>{
        const authToken = localStorage.getItem('token')
        const data = {
            id:localStorage.getItem('userId'),
            name:localStorage.getItem('userName')
        }

        if(!authToken){
            return
        }
        if(data.id !== null && authToken !== null){
            setUser({
                id:data.id,
                name:data.name
            })
            setUserToken(authToken)
        }
    }, [])

    async function login(email: string, password: string){
        await database.post('/login',{
            email:`${email}`,
            password:`${password}`
        })
        .then(function(res){
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.token))
            localStorage.setItem('userId', res.data.user.id)
            localStorage.setItem('userName', res.data.user.name)
            setUser({
                id:res.data.user.id,
                name:res.data.user.name
            })
            return

        })
        .catch(err=>{return})
      }

    return (
        <AuthContext.Provider value={{user,login,userToken,setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}