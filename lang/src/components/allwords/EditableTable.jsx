import React, { useState } from 'react';
import './EditableTable.scss';

const Newtable = ({ columns, rows, actions }) => {
  const [editMode, seteditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [dataword, setdataword] = useState(rows);
  const [newword, setnewword] = useState();

  const editword = (rowID) => {
    seteditMode(true);
    setnewword(undefined);
    setRowIDToEdit(rowID);
  }

  const deleteword = (rowID) => {
    const newData = dataword.filter(row => {
      return row.id !== rowID ? row : null
    });

    setdataword(newData);
  }

  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setnewword({
      id: rowID,
      [fieldName]: value
    })
  }

  const cancelediting = () => {
    seteditMode(false);
    setnewword(undefined);
  }

  const savechanges = () => {
    setTimeout(() => {
    seteditMode(false);

      const newData = dataword.map(row => {
        if (row.id === newword.id) {
          if (newword.english) row.english = newword.english;
          if (newword.transcription) row.transcription = newword.transcription;
          if (newword.russian) row.russian = newword.russian;
        }

        return row;
      })

      setdataword(newData);
      setnewword(undefined)
    }, 1000)
  }

  return (
    <table className='table'>
      <thead>
      <tr>
        {columns.map((column) => {
          return <th key={column.field} className='table-title'>{ column.fieldName }</th>
        })}
      </tr>
      </thead>
      <tbody>
      {dataword.map((row) => {
        return <tr className='table-row' key={row.id} >
          <td>
            {row.id}
          </td>
          <td>
            { editMode && rowIDToEdit === row.id
              ? <input 
                type='text'
                defaultValue={newword ? newword.english : row.english}
                id={row.id}
                name='english'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.english
            }
          </td>
          <td>
            { editMode && rowIDToEdit === row.id
              ? <input
                type='text'
                defaultValue={newword ? newword.transcription : row.transcription}
                id={row.id}
                name='transcription'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.transcription
            }
          </td>
          <td>
            { editMode && rowIDToEdit === row.id
              ? <input
                type='text'
                defaultValue={newword ? newword.russian : row.russian}
                id={row.id}
                name='russian'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.russian
            }
          </td>
          {actions &&
          <td className='btns'>
            { editMode && rowIDToEdit === row.id
              ? <button onClick={ () => savechanges() } className='custom-table__action-btn' disabled={!newword}>
                сохранить
              </button>
              : <button  onClick={ () => editword(row.id) } className='custom-table__action-btn'>
                Изменить
              </button>
            }

            { editMode && rowIDToEdit === row.id
              ? <button onClick={() => cancelediting()} className='custom-table__action-btn'>
                Отменить изменения
              </button>
              : <button onClick={() => deleteword(row.id)} className='custom-table__action-btn'>
                Удалить
              </button>
            }
          </td>
          }
        </tr>
      })}
      </tbody>
    </table>
  );
};

export default Newtable;