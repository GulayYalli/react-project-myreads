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

  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search} />
        <Route path="/" exact render={()=>(<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ListBooks books={this.state.books} />
              </div>
            </div>
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
