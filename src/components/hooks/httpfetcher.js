import { useEffect, useState } from "react";


export const useHttp = (url,dependencies)=>{
    const [response,setResponse] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        if(url){
            setIsLoading(true);
            fetchData();
            setIsLoading(false);
        }
    },dependencies)
    
    async function fetchData(){
        console.log("Sending Http Request to "+url);
        const res = await fetch(url,{mode:'cors'});
        const data = await res.json();
        setResponse(data);
        console.log("Response Received",data);
    }    
    return [isLoading,response];
}