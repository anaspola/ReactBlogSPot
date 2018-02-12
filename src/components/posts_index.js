import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostIndex extends Component{

  componentWillMount(){
    this.props.fetchPost();
  }

  render(){
    return(
      <div>All blog post</div>
    )
  }
}

export default connect(null, { fetchPost  })(PostIndex);
