import React from 'react';
import PropTypes from 'prop-types';

const SelectBook = props => {
    const { currentShelf, isSearchPage } = props;
    
    const updateShelf = (movedShelf) => {
        props.updateShelf(movedShelf);
    }
    return ( 
        <div className="book-shelf-changer">
            <select value={currentShelf ? currentShelf:'none'} onChange={(event) => updateShelf(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
                <option value="read">Read</option>
                {isSearchPage ? (<option value="none">None</option>):''}
            </select>
        </div>
    );
}

SelectBook.propTypes = {
    currentShelf : PropTypes.string,
    isSearchPage : PropTypes.bool
}
export default SelectBook;