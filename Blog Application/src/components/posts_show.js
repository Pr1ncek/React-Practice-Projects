import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if(post){
        console.log(post);
    }

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{post.title}</h1>
        <h3>{post.categories}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);
