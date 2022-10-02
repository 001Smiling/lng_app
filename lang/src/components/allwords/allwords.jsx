import React from 'react';
import './allwords.scss';
import Newtable from "./EditableTable";
import Header from '../header/header';


function Section() {
  <Header/>
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'english', fieldName: 'Слово' },
    { field: 'transcription', fieldName: 'Транскрипция' },
    { field: 'russian', fieldName: 'Перевод' },
    { field: 'option', fieldName: 'Опции' }
  ];
  const data= [
    { id: 1, english: 'answer', transcription: '[ˈɑːnsə]', russian: 'ответ' },
    { id: 2, english: 'comment', transcription: '[ˈkɔment]', russian: 'комментарий' },
    { id: 3, english: 'context', transcription: '[ˈkɔntekst]', russian: 'контекст' },
    { id: 4, english: 'conversation', transcription: '[ˌkɔnvəˈseɪʃən]', russian: 'разговор' },
    { id: 5, english: 'description', transcription: '[dɪsˈkrɪpʃən]', russian: 'описание' }
  ];
    return (
      <>
      <div className='table-main'>
      <Newtable columns={columns} rows={data} actions />
      </div>
    </>
    )
  }
  
  export default Section