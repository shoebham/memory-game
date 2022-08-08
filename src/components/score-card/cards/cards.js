
import { useState,useEffect } from "react";
import Card from "./card"
const Cards = (props)=>{
    const [response,setResponse] = useState(null);
    const GIF_API_KEY="L2AncndI0uU2YX5TFCrENzUaUJUkOD7j";
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${GIF_API_KEY}`,{mode:'cors'});
            const data = await res.json();
            setResponse(data.data);
        }
        fetchData();
    }, [])
    useEffect(()=>{
        console.log(response);
    },[response])

    return(
        <div>
            {response && response.map((item,index)=>{
                return <Card key={index} url={item.images.downsized.url}/>
            }
            )}
        </div>
    )
}

export default Cards;