
const Card = (props)=>{
    console.log(props)
    return(
        <div>
            <img src={props.url}></img>
        </div>
    )
}
export default Card;