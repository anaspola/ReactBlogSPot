import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const SINGLE_POST = 'SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=12j2Wdz4deqeQQEX';

export function fetchPost(){
  const request =  axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type : FETCH_POST,
    payload : request
  }
}

export function createPost(props){
  const request =  axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return{
    type : ADD_POST,
    payload : request
  }
}

export function fetchOnePost(id){
  const request =  axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return{
    type : SINGLE_POST,
    payload : request
  }
}

export function deletePost(id){
  const request =  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return{
    type : DELETE_POST,
    payload : request
  }
}
