import { React } from 'react';
import { MdDeleteForever } from 'react-icons/md';

import './Note.css';

const Note = ({ text, createDate }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{createDate}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  )
}

export default Note;