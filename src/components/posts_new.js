import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component{

  static contextTypes = {
    router : PropTypes.object
  }

  onSubmit(props){
    this.props.createPost(props).then(()=>{
      this.context.router.push('/');
    });
  }

  render(){
    const { fields : { title, categories, content }, handleSubmit } = this.props;
    return(
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
          <h2>Create new post</h2>
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
            <div>
              {title.touched ? title.error : ''}
            </div>
          </div>
          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Category</label>
            <input type="text" className="form-control" {...categories}/>
            <div>
              {categories.touched ? categories.error : ''}
            </div>
          </div>
          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea className="form-control" {...content}/>
            <div>
              {content.touched ? content.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">submit</button>
          <Link className="btn btn-danger" to="/">cancel</Link>
        </form>
    )
  }

}

function validate(values){
  const error = {};

  if(!values.title){
    error.title = "Enter a title";
  }
  if(!values.categories){
    error.categories = "Enter a category"
  }
  if(!values.content){
    error.content = "Enter some content"
  }
  return error;
}

export default reduxForm({
  form :'NewForm',
  fields : ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
