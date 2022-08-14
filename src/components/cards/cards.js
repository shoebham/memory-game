
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
            // shuffle the cards state
            setCards((cards)=>{
                // create new array
                let newCards = [...cards];
                newCards.sort(()=>Math.random()-0.5);
                return newCards;
                // loop through the array
            });
    };
    
    // if(cards.length===0){
    //     createCards();
    // }else{
    //     shuffleCards();
    // }
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
        <div>
            {cards}{console.log("rendering cards",cards)}{ console.log(isLoading)}
        </div>
    )
}

export default Cards;