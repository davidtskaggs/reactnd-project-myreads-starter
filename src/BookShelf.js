import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import ListBooks from "./ListBooks"
import { Link } from 'react-router-dom'

class BookShelf extends Component {

  state = {
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  render() {
    return(
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                {/* <ListBooks books={this.state.books}/> */}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                {/* <ListBooks books={this.state.books}/> */}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                {/* <ListBooks books={this.state.books}/> */}
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            >Add a book</Link>
          </div>
        </div>
      )
  }
}

export default BookShelf;
