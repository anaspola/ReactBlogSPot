import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOnePost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component{
  static contextTypes = {
    router : PropTypes.object
  }

  componentWillMount(){
    this.props.fetchOnePost(this.props.params.id);
  }

  onDeletePost(){
    this.props.deletePost(this.props.params.id).then(()=>{
      this.context.router.push('/');
    })
  }
  render(){
    const { post } = this.props;
    if(!post){
      return <div>Loading........</div>
    }
    return(
      <div>
        <Link to="/">Back to list</Link>
        <button onClick={this.onDeletePost.bind(this)}>Delete</button>
        <h2>{post.title}</h2>
        <h6>Categories : {post.categories}</h6>
        <div>
          {post.content}
        </div>
      </div>

    )
  }
}

function mapStateToProps(state){
  return { post : state.posts.post }
}

export default connect(mapStateToProps, { fetchOnePost, deletePost })(PostsShow);
