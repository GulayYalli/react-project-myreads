import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = props => {

    const { shelf, booksByShelf, updateShelfs } = props;
    return ( 
        <div className="bookshelf-books">                   
            <h2 className="bookshelf-title">{shelf}</h2>
                <ol className="books-grid"> 
                    {
                        booksByShelf.map((book,index)=>(                             
                            <Book shelf={shelf} key={index} book={book} updateShelfs={updateShelfs} />
                        ))
                    }                                                                                 
                </ol>      
        </div>
    );
}

Shelf.propTypes = {
    shelf: PropTypes.string,
    booksByShelf: PropTypes.array.isRequired,
    updateShelfs: PropTypes.func.isRequired
}
export default Shelf;