import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import NotesList from './components/NotesList.jsx';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-data')) ?? []);

  const [searchText, setSearchText] = useState('');
  const [modeToggle, setModeToggle] = useState(0);

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes])

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

  const toggleMode = () => modeToggle === 0 ? setModeToggle(1) : setModeToggle(0);
  
  const modeClassname = modeToggle === 0 ? 'container' : 'container dark-mode';

  return (
    <div className={modeClassname}>
      <Header modeToggle={modeToggle} toggleMode={toggleMode} />
      <SearchBar searchText={setSearchText} />
      <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} addNote={addNote} deleteNote={deleteNote} />
    </div>
  )
};

export default App;