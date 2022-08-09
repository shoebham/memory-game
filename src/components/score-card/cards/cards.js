
import { useEffect, useState } from "react";
import Card from "./card"
const Cards = (props)=>{
    const cards = [];

    const createCards = ()=>{
        for(let i=0;i<5;i++){
            cards.push(<Card key={i} handleChange={props.handleChange} shuffleCards={shuffleCards}/>);
        }
    };
    const shuffleCards = ()=>{
        console.log("before shuffling",cards);
        cards.sort(()=>Math.random()-0.5);
        console.log("after shuffling",cards);
    };

    if(cards.length===0){
        createCards();
    }else{
        shuffleCards();
    }

    useEffect(()=>{
        console.log("mounting")
    },[])


    return(
        <div>
            {shuffleCards()}
            {cards}
        </div>
    )
}

export default Cards;