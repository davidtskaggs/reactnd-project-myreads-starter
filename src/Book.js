import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}></div>
            <ShelfChanger />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {this.props.book.authors.map((author) => (
            <div className="book-authors">{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book
