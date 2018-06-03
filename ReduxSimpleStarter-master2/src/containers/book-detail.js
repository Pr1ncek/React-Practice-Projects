import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book for more details!</div>;
    }
    return (
      <div>
        <h3> Title: {this.props.book.title}</h3>
        <p>
          <strong>Pages:</strong> {this.props.book.pages}
        </p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // Whatever is returned from here will show up as props in book-list.js
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
