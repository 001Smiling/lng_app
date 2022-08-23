import './cards.scss';
import './vari.scss';
import star from'./star.png';

const Card = (word) => {
    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__word'>
                <img className='card__star' src={star} alt="star"/>
                   <div className='card__text'>{word.english}</div> 
                </div>
            </div>
        </div >
    );
}

export default Card;