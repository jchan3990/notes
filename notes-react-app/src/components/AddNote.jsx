import { React, useState } from 'react';

import './AddNote.css';

const AddNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState('');

  const saveNote = e => {
    e.preventDefault();
    if (newNote.trim().length > 0) {
      addNote(newNote);
      setNewNote('');
    }
  }

  return (
    <div className='note new'>
      <textarea 
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        maxLength='200'
        onChange={e => setNewNote(e.target.value)}
      ></textarea>
      <div className='note-footer'>
        <small>{200 - newNote.length} Characters Remaining</small>
        <button className="save" onClick={saveNote}>Save</button>
      </div>
    </div>
  )
}

export default AddNote;