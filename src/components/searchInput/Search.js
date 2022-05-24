import React, { useState } from 'react';
import { Input } from 'antd';
import './search.css';


const Search = () => {

    const [search, setSearch] = useState('');

    return (<>

        <Input.Group compact className='search'>
            <input
                placeholder='Search...'
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                type='text'
                className='search__input' />
        </Input.Group>
    </>)

}


export default Search;