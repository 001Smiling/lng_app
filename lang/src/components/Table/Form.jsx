import { useState } from "react";


const Form = () => {
  
  const [state, setState] = useState();


  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });

  };

  const clearForm = () => {
    setState();
  };

  const onSubmit = () => {
    if (
      state.english !== "" &&
      state.transcription !== "" &&
      state.russian !== "" &&
      state.tags !== ""
    ) {
      addWords(state);
      setState();
    }
  };

  return (
    <form className="row-form" onSubmit={onSubmit}>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="English"
          name="english"
          data-name={"english"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="Transcription"
          name="transcription"
          data-name={"transcription"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="Russian"
          name="russian"
          data-name={"russian"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="Tags"
          name="tags"
          data-name={"tags"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell-action">
        <button className="button-form" onClick={onSubmit}>Add</button>
      </div>
      <div className="cell-action">
        <button className="button-form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  );
};

export default Form;