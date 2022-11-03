import { useState } from "react";
import './table.scss';

function Allwords({ id, english, russian, transcription }) {
  const [ChangeData, setChangeData] = useState(false);
  const [NewWord1, setNewWord1] = useState({ id, english });
  const [NewWord2, setNewWord2] = useState({ russian,transcription });
  const [IdValid, setIdValid] = useState ('true')
  const [WordValid, setWordValid] = useState ('true')
  const [TranscValid, setTranscValid] = useState ('true')
  const [RussianValid, setRussianValid] = useState ('true')
  const [error, seterror] = useState ('')

  function newid(event) {
    setNewWord1({
      id: event.target.value,
      english: NewWord1.english,
    })
    if (event.target.value === ''){
      seterror ('Все поля должны быть заполнены!')
      setIdValid(false)
    }
    else {
      const idcard = /^\d+$/;
      if (!idcard.test(event.target.value)){
        seterror ('Укажите цифру')
        setIdValid(false)
        
      }
          else{
            seterror ('')
            setIdValid(true)
          }
    };
  }

  function newword(event) {
    setNewWord1({
      english: event.target.value,
      id: NewWord1.id,
    });
    if (event.target.value === ''){
      seterror ('Все поля должны быть заполнены!')
      setWordValid(false)
    }
    else {
      seterror ('')
      setWordValid(true)
    };
  }

  function newtranscription(event) {
    setNewWord2({
      transcription: event.target.value,
      russian: NewWord2.russian,
    });
    if (event.target.value === ''){
      seterror ('Все поля должны быть заполнены!')
      setTranscValid(false)
    }
    else {
      seterror ('')
      setTranscValid(true)
    };
  }
  function newrussian(event) {
    setNewWord2({
      transcription: NewWord2.transcription,
      russian: event.target.value
    });
    if (event.target.value === ''){
      seterror ('Все поля должны быть заполнены!')
      setRussianValid(false)
    }
    else {
      seterror ('')
      setRussianValid(true)
    };
  }
  function clickEdit() {
    setChangeData(true);
  }

  const save = () => {
    setChangeData(false);
  };
  function cancel() {
    setChangeData(false);
    setNewWord1({
      id: id,
      english: english,
    })
    setNewWord2({
      transcription:transcription,
      russian: russian
    })
  }

  if (!ChangeData) {
    return (        <div>
        <div className="table-tag ">
        <div className="row">{NewWord1.id}</div>
          <div className="row">{NewWord1.english}</div>
          <div className="row">{NewWord2.transcription}</div>
          <div className="row">{NewWord2.russian}</div>
          <div className="row">
            <button className="edit" onClick={clickEdit} >Изменить</button>
          </div>
      </div>
      </div>
    );
  } else {
    return (
      <>
      {error && <div className="error">{error}</div>}
        <div className="table-tag ">
            <input className={`row1 ${!IdValid ? 'rowerror1' : ''}`} onChange={newid} value={NewWord1.id} name="id"></input>
            <input className={`row2 ${!WordValid ? 'rowerror2' : ''}`} onChange={newword} value={NewWord1.english} name="english"></input>
            <input className={`row3 ${!TranscValid ? 'rowerror3' : ''}`} onChange={newtranscription} value={NewWord2.transcription} name="transcription"></input>
            <input className={`row4 ${!RussianValid ? 'rowerror4' : ''}`} onChange={newrussian} value={NewWord2.russian} name="transcription"></input>
          <div className="row1 row-edit">
            <button className="btnedit" onClick={save} disabled={!IdValid || !WordValid || !TranscValid || !RussianValid }>Сохранить</button>
            <button className="btnedit" onClick={cancel} >Отменить</button>
          </div>
      </div>
      </>
      
    );
  }
}

export default Allwords;