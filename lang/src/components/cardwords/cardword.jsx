import './cardword.scss';
import { useState } from "react";

const Card = (word) => {
    const [pressed, setPressed] = useState(false);
    const clickMe = ()=>{
       setPressed(!pressed)
     }
    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__word'>
                   <div className='card__text'>{word.english}</div> 
                   <div className='card__text'>{word.transcription}</div> 
                </div>
                <div className="btn-trans">
                  <button className='btn-trans__style' onClick={clickMe}>{pressed ? word.russian : "Перевод"}</button> 
                </div>
            </div>
        </div >
    );
}

export default Card;