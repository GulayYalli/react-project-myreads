import React, { Component } from 'react';
import SelectBook from './SelectBook';
class Book extends Component {
    state = {  }
    render() { 
        const { books, shelfs } = this.props;

        return ( books.map((book)=>(
            <li key={ book.id } >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>                                            
                        <SelectBook shelfs={shelfs} bookType={book.shelf} />
                    </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ book.authors }</div>
                </div>
            </li>
        )) 
        );
    }
}
 
export default Book;