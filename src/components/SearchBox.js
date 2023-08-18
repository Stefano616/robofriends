import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--red bg-lightest-yellow"
                type="search"
                placeholder='search robofriend'
                onChange={searchChange}
            />
        </div>


    );
}

export default SearchBox;