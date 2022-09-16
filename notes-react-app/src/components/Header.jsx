import { React, useState } from 'react';

const Header = ({ modeToggle, toggleMode }) => {
  const mode = modeToggle === 0 ? 'Dark Mode' : 'Light Mode'

  const style = modeToggle === 0 ? {color: 'black'} : {color: 'white'};
  return (
    <div className='header'>
      <h1 className='title' style={style}>Notes</h1>
      <button className='toggle' onClick={toggleMode}>{mode}</button>
    </div>
  )
};

export default Header;