import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-6">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here will show up as props in book-list.js
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever the selectBook action is called, bindActionCreators will take that actions and by using dispatch, it will allow our action to flow to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);