import { useEffect } from "react";
import Api from "../services/Api";
import { useState } from 'react'

type ListData ={
    id:string;
    name:string;
}
type resProp = {
    data:ListData;
}
export function useList(){
    const [list, setList] = useState<ListData[]>([])
    useEffect(()=>{
           Api.getUserList().then(function(item:resProp|any){
               setList(item.data)
           }).catch(err =>{console.log(err)})
    }, [])
    return {list}
}
