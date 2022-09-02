
import {useState,useEffect } from "react";
import Card from "./card"
import './cards.css'
const Cards = (props)=>{
    const [cards,setCards] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const {score,handleScore,handleBestScore,handleChange} = props;

    const createCards = ()=>{
        for(let i=0;i<props.mode;i++){
            // cards.push(<Card key={i} handleChange={props.handleChange} shuffleCards={shuffleCards} score={score} handleScore={handleScore} handleBestScore={handleBestScore}/>);
            setCards((cards)=>[...cards,<Card key={i} handleChange={handleChange} shuffleCards={shuffleCards} score={score} handleScore={handleScore} handleBestScore={handleBestScore}/>]);
        }
    };
    const shuffleCards = ()=>{
            // shuffle the cards state
            setCards((cards)=>{
                // create new array
                let newCards = [...cards];
                newCards.sort(()=>Math.random()-0.5);
                return newCards;
                // loop through the array
            });
    };
    
    useEffect(()=>{
            console.log("mode change",cards.length);
            setCards([]);
            setIsLoading(false);
            // createCards();
    },[props.mode])

    useEffect(()=>{
        if(!isLoading){
            createCards();
            setIsLoading(true);
        }
    },[isLoading])

    return(
        <div className="cards">
            {cards}{console.log("rendering cards",cards)}
        </div>
    )
}

export default Cards;