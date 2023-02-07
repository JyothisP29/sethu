import React from 'react';
import { MdSearch } from 'react-icons/md';


const SearchBar = () => (
    <div>
        <MdSearch className='search-icon' size='1.5em' />
        <input type="text" name="search" style={{ width: 330 }} placeholder="Search..">

        </input>
    </div>

); export default SearchBar;