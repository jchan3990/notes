import { React } from 'react';
import { MdDeleteForever } from 'react-icons/md';

import './Note.css';

const Note = () => {
  return (
    <div className='note'>
      <span>Hello! This is our first note! Hurray!</span>
      <div className='note-footer'>
        <small>09/15/2022</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  )
}

export default Note;