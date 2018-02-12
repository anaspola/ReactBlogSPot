import { FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all : [], post:null};

export default funtion( state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_POST:

      break;
    default:
      return state;
  }

}
