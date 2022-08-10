
import {useState,useEffect } from "react";
import Card from "./card"
const Cards = (props)=>{
    const [cards,setCards] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const {score,handleScore,handleBestScore} = props;

    const createCards = ()=>{
        for(let i=0;i<props.mode;i++){
            // cards.push(<Card key={i} handleChange={props.handleChange} shuffleCards={shuffleCards} score={score} handleScore={handleScore} handleBestScore={handleBestScore}/>);
            setCards((cards)=>[...cards,<Card key={i} handleChange={props.handleChange} shuffleCards={shuffleCards} score={score} handleScore={handleScore} handleBestScore={handleBestScore}/>]);
            
        }
    };
    const shuffleCards = ()=>{
        cards.sort(()=>Math.random()-0.5);
    };

    useEffect(()=>{
        if(!isLoading){
            setIsLoading(true);
        }else{
            setCards([]);
        }
    },[props.mode])

    useEffect(()=>{
        console.log("cards changed");
        if(cards.length===0){
            createCards();
        }
    },[cards])



    return(
        <div>
            {shuffleCards()}
            {cards}
        </div>
    )
}

export default Cards;