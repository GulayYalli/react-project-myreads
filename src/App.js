import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Search from './Components/Search'
import ListBooks from './Components/ListBooks'
class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => { 
        this.setState(() => ({
          books
        }))
    })
  }

  updateShelfs = (chbook,chshelf) => {   
    BooksAPI.update(chbook,chshelf).then(() => {
      this.setState((prevState)=>({
        books: prevState.books.filter(book=> book.id !== chbook.id).concat(chbook)
      }))
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route path="/search" render={() => (<Search myBooks={books} updateShelfs={this.updateShelfs}></Search>)} />
        <Route path="/" exact render={()=>(<div className="list-books">
            <div className="list-books-title"><h1>MyReads</h1></div>
            <ListBooks books={ books } updateShelfs={this.updateShelfs} />       
            <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
