

import Card from "./card"
const Cards = (props)=>{
    return(
        <div>
            {[...Array(5)].map((e,i)=>{
                return <Card key={i}/>
            })}
        </div>
    )
}

export default Cards;