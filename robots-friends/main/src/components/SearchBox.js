import React from 'react';


const SearchBox = ({searchField, searchChange}) => {
    return (
        //pa2 line jump
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;