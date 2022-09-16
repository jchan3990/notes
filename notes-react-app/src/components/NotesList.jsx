import { React } from 'react';

import Note from './Note.jsx';
import AddNote from './AddNote.jsx';

const NotesList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note.id} id={note.id} text={note.text} createDate={note.createDate} deleteNote={deleteNote}  />
      ))}
      <AddNote addNote={addNote} />
    </div>
  )
}

export default NotesList;