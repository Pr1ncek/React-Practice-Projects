import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label className="col-form-label">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div id="new-post-form">
        <h1>Create New Post</h1>
        <form>
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
    errors.title = "Enter post categories";
  }
  if (!values.content) {
    errors.title = "Enter post content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostNewForm"
})(PostsNew);
