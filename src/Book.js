import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            {/* TODO: separate compoent for changer */}
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {/* TODO: Handle multiple authors */}
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
