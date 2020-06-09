import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleCange})=> {
    return(
        <input 
className='search'
type='search' 
placeholder={placeholder} 
onChange={handleCange}
/>
    )

}