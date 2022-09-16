import { React } from 'react';

import './App.css';

import NotesList from './components/NotesList.jsx';

const App = () => {
  return (
    <div className='container'>
      <NotesList />
    </div>
  )
};

export default App;