import { React } from 'react';

import './NotesList.css';
import Note from './Note';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note.id} text={note.text} createDate={note.createDate} />
      ))}
    </div>
  )
}

export default NotesList;