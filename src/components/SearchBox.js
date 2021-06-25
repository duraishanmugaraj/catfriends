import React from 'react';

function SearchBox(props) {
    return (
        <div className="pa2">
            <input style={{ backgroundColor: "rgba(255,255,255,0.4)" }} className="pa3 ba b--purple br3"
            value={props.value}
                onChange = {props.onSearch}
                type="search"
                placeholder="Search kittys"></input>
        </div>
    );
}

export default SearchBox