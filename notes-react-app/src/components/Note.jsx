import { React } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, createDate, deleteNote }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{createDate}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' onClick={() =>deleteNote(id)} />
      </div>
    </div>
  )
}

export default Note;