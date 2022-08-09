
import Card from "./card"
const Cards = (props)=>{
    const cards = [];
    const {score,handleScore,handleBestScore} = props;
    const createCards = ()=>{
        for(let i=0;i<5;i++){
            cards.push(<Card key={i} handleChange={props.handleChange} shuffleCards={shuffleCards} score={score} handleScore={handleScore} handleBestScore={handleBestScore}/>);
        }
    };
    const shuffleCards = ()=>{
        cards.sort(()=>Math.random()-0.5);
    };

    if(cards.length===0){
        createCards();
    }else{
        shuffleCards();
    }

    return(
        <div>
            {shuffleCards()}
            {cards}
        </div>
    )
}

export default Cards;