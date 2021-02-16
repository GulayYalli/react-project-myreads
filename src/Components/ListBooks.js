import React from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

const ListBook = (props) => {

    const { books, updateShelfs } = props;
    const booksByShelf = {};
    books.forEach(book => {
        const bookShelf = book.shelf;      
        if(booksByShelf[bookShelf]) {
            booksByShelf[bookShelf].push(book);
        } else {
            booksByShelf[bookShelf] = [book]
        }
    })
    return (  
        <div className="list-books-content">
            <div>                  
                <div className="bookshelf">             
                    { 
                        Object.keys(booksByShelf).map((shelf,index)=>(                             
                            <Shelf key={index} booksByShelf={booksByShelf[shelf]} shelf={shelf} updateShelfs={updateShelfs} />
                        ))                      
                    }
                </div>  
            </div>
        </div>    
    );
}

ListBook.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelfs: PropTypes.func.isRequired
}
export default ListBook;
 