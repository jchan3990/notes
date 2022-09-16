import { React, useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import NotesList from './components/NotesList.jsx';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Take out the trash",
      createDate: "09/15/2022"
    },
    {
      id: nanoid(),
      text: "Update fantasy lineup. Stupid Keenan Allen",
      createDate: "09/14/2022"
    },
    {
      id: nanoid(),
      text: "Buy flowers for Tiffany",
      createDate: "10/15/2022"
    },
    {
      id: nanoid(),
      text: "Get reservation for Bansang",
      createDate: "10/30/2022"
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      createDate: date.toLocaleDateString()
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <SearchBar searchText={setSearchText} />
      <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} addNote={addNote} deleteNote={deleteNote} />
    </div>
  )
};

export default App;