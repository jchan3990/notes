import { React } from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ searchText }) => {
  return (
    <div className='search-bar'>
      <MdSearch className='search-icon' size='1.3em' />
      <input type='text' placeholder='Search...' onChange={e => searchText(e.target.value)} />
    </div>
  )
};

export default SearchBar;