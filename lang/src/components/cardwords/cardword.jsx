import './cardword.scss';
import React, {
    useState,
    useEffect,
    useRef
  } from 'react';


const Card = (word) => {
    const [WithoutRussian, setWithoutRussian] = useState(false);
    const [countword, setCountword] = useState(0);
    const ref = useRef();
        const clickMe = ()=>{
            setWithoutRussian(true)
            setCountword(countword + 1);
     }
     const clickMe2 = ()=>{
        setWithoutRussian(false)
 }
 useEffect(() => {
        ref.current.focus()},[])
        return (  
            <div className='card'>
            <div className='card__container'>
                <div className='card__word'>
                   <div className='card__text'>{word.english}</div> 
                   <div className='card__text'>{word.transcription}</div> 
                </div>
                <div className="btn-trans">
                  { WithoutRussian=== false
                  ? <button className='btn-trans__style' ref={ref} onClick={()=>{clickMe()}}>Перевод</button>
                  :<button className='btn-trans__style'  onClick={()=>{clickMe2()}}>{word.russian}</button> } 
                </div>
            </div>
            <div className="count-word">Выученно: {countword}</div>
        </div >
        );
}

export default Card;