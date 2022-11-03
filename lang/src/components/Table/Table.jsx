import React from 'react';
import Allwords from './Allwords';
import './table.scss';
import { wordsen } from "../data/word1";

export default function Table() {  
      const cardcontext = wordsen.map((word) =>(
            <Allwords id = {word.id} english = {word.english} transcription = {word.transcription} russian={word.russian} />
                  ))
          return (<>
    <div className="table">
    <div  className="table-tag">
    <div className="column" >Номер</div>
      <div className="column" >Cлово</div>
      <div className="column" >Транскрипция</div>
      <div className="column" >Перевод</div>
      <div className="column" >Опции</div>
      </div>
      {cardcontext}
      </div>
    </>
  )
}
