import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=12j2Wdz4deqeQQEX';

export function fetchPost(){
  const request =  axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type : FETCH_POST,
    payload : request
  }
}
