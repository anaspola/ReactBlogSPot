import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component{

  componentWillMount(){
    this.props.fetchPost();
  }

  renderPosts(){
    console.log(this.props.posts);
    return this.props.posts.map((post) => {
      return(
          <li className="list-group-item" key={post.id}>
            <Link to={"post/"+post.id} >
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </li>
      )
    } )
  }

  render(){
    return(
      <div className="col-xs-12">
        <Link to="post/new" className="btn btn-primary pull-xs-right">
          Add new post
        </Link>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPost })(PostIndex);
