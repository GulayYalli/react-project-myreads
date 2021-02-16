import React from 'react';
import SelectBook from './SelectBook';
import PropTypes from 'prop-types';

const Book = props => {
    const { book } = props;
    const updateShelf = (movedShelf) => {     
        book.shelf = movedShelf;
        props.updateShelfs(book, movedShelf);
    }

    let thumbnail = "";
    try {
        thumbnail = book.imageLinks.thumbnail;
    } catch (error) {
        // ...
    }
    return ( 
        <li key={ book.id } >
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}></div>                                            
                    <SelectBook currentShelf={book.shelf} updateShelf={updateShelf} isSearchPage={props.isSearchPage} />
                </div>
                <div className="book-title">{ book.title }</div>
                { book.authors.map(author=>(
                    <div key={author} className="book-authors">{author}</div>
                )) }
            </div>
        </li>  
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}
export default Book;