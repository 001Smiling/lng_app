import { useState } from "react";
import Cards from './cardword';
import { wordsen } from "../data/word1";

export default function Cardcont() {

    const [index, setIndex] = useState(1);
    const [setPressed] = useState(false);
    const nextCard = () => {
        if (index !== wordsen.length) {
            setIndex(index + 1)
            setPressed(false)
        }
        else if (index === wordsen.length) {
            setIndex(1)
        }
    };
    const backCard = () => {
        if (index !== 1) {
            setIndex(index - 1)
            setPressed(false)
        }
        else if (index === 1) {
            setIndex(wordsen.length)
        }
    };

    const cardcontext = wordsen.map((card) => {
        return (
            <Cards english={card.english} transcription={card.transcription} russian={card.russian} />
        )
    })


    return (
        <div className="card1">
            <button className='card-slide' onClick={backCard}>НАЗАД</button>
            {cardcontext[index - 1]}
            <button className='card-slide' onClick={nextCard}>ВПЕРЁД</button>
            
        </div >
    )
}