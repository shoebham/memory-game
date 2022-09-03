import {useHttp} from "../hooks/httpfetcher";
import './card.css';

const Card = (props)=>{
    const [isRandomWordLoading,randomWord] = useHttp("https://random-word-api.herokuapp.com/word",[]);
    var url;
    if(!isRandomWordLoading&&randomWord){
        url = `https://api.giphy.com/v1/gifs/translate?api_key=L2AncndI0uU2YX5TFCrENzUaUJUkOD7j&s=${randomWord}`;
    }
    const [isLoading,response] = useHttp(url,[randomWord]);

    const handleClick = ()=>{
        props.handleChange(response.data.images.preview_gif.url);
        props.shuffleCards();
    }

    return(
        <div className="card" onClick={handleClick}>
            {response&&response.data&&!isLoading&&<img width="200" height="200" src={response.data.images.preview_gif.url} alt=""/>}  
            <p>{randomWord}</p>
        </div>
    )
}
export default Card;