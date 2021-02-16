import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
class Search extends Component {
    state = { 
      books : []
    }

    onSearchBook = (query) => {
      if(query !== "") {
        BooksAPI.search(query).then((books)=>{
          if(!books.error){
            this.setShelf(books);
            this.setState(() => ({
              books:books
            }))
          } else {
            this.setState(() => ({
              books:[]
            }));
          }
        })
      } else {
        this.setState(() => ({
          books:[]
        }))
      }    
    }

    setShelf = (books) => {
      const myBooks = this.props.myBooks;
      books.map(book => {
        Object.keys(myBooks).forEach((el) => {
          if(myBooks[el].id===book.id) {
            book.shelf = myBooks[el].shelf;
          }          
        })
        return book;        
      })
    }

    updateShelfs = (book, movedShelf)=>{
      this.props.updateShelfs(book, movedShelf);
    }

    render() { 
        const { books } = this.state;
        const booksLength = books.length > 0;
        return ( <div className="search-books">
          <div className="search-books-bar">
            <Link to="/"><button className="close-search">Close</button></Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(event)=> this.onSearchBook(event.target.value)} />
            </div>
          </div>
          <div className="search-books-results">
            {booksLength ? (             
                <ol className="books-grid">
                  {books.map((book)=>(
                      <Book shelf={book.shelf ? book.shelf : 'none'} key={book.id} book={book}  updateShelfs={this.updateShelfs} isSearchPage={true} />                                     
                  ))}               
                </ol>
            ):( 
                <></>
              )
            }
          </div>
        </div>);
    }
}
 
export default Search;