import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index.js";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    // when passing a callback function like  onInputChange()
    // you need to bind the this keyword
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    //console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevents the default form submit behavior
    event.preventDefault();

    // We need to go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for a city to view forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);