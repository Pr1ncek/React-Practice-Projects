import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label className="col-form-label">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div id="new-post-form">
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" component={this.renderField} label="Post Title" />
          <Field
            name="categories"
            component={this.renderField}
            label="Post Catergories"
          />
          <Field
            name="content"
            component={this.renderField}
            label="Post Content"
          />
          <button className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter post title";
  }
  if (!values.categories) {
    errors.categories = "Enter post categories";
  }
  if (!values.content) {
    errors.content = "Enter post content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
