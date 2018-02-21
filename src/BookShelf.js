import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import ListBooks from "./ListBooks"

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
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>

          <div className="bookshelf-books">
            <ListBooks books={this.state.books}/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ListBooks books={this.state.books}/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ListBooks books={this.state.books}/>
          </div>
        </div>
    </div>
    )
  }
}

export default BookShelf;
