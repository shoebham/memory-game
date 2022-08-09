import {useHttp} from "../httpfetcher";


const Card = (props)=>{
    const [isRandomWordLoading,randomWord] = useHttp("https://random-word-api.herokuapp.com/word",[]);
    var url;
    if(!isRandomWordLoading&&randomWord){
        url = `https://api.giphy.com/v1/gifs/translate?api_key=L2AncndI0uU2YX5TFCrENzUaUJUkOD7j&s=${randomWord}`;
    }
    const [isLoading,response] = useHttp(url,[randomWord]);
    const handleClick = ()=>{
        props.handleChange(response.data.images.downsized.url);
        props.shuffleCards();
    }

    return(
        <div className="card" onClick={handleClick}>
            {response&&<img src={response.data.images.downsized.url} alt=""/>}  
            <p>{randomWord}</p>
        </div>
    )
}
export default Card;