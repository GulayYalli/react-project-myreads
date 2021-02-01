import React, { Component } from 'react';
import Book from './Book';


class MyReads extends Component {
    
    state = {  }
    render() {    
        const { books } = this.props;
        const shelfs = {};
        books.forEach(book => {
            const bookShelf = book.shelf;      
            if(shelfs[bookShelf]) {
                shelfs[bookShelf].push(book);
            } else {
                shelfs[bookShelf] = [book]
            }
          })
        
        return (                    
            <div className="bookshelf">             
                {
                    Object.keys(shelfs).map((shelf,index)=>(
                        <div key={ index } className="bookshelf-books">                        
                            <h2 className="bookshelf-title">{shelf}</h2>
                            <ol className="books-grid">
                                <Book shelfs={shelfs} books={ shelfs[shelf] } />
                            </ol>
                        </div>
                    ))
                }
            </div>      
        );
    }
}
 
export default MyReads;