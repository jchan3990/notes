import { React } from 'react';

import './NotesList.css';
import Note from './Note.jsx';
import AddNote from './AddNote.jsx';

const NotesList = ({ notes, addNote }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note.id} text={note.text} createDate={note.createDate} />
      ))}
      <AddNote addNote={addNote} />
    </div>
  )
}

export default NotesList;