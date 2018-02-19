import { FETCH_POST, SINGLE_POST } from '../actions/index';

const INITIAL_STATE = { all : [], post:null};

export default function( state = INITIAL_STATE, action){
  switch (action.type) {
    case SINGLE_POST:
      return { ...state, post:action.payload.data }
    case FETCH_POST:
      return { ...state, all : action.payload.data }
      break;
    default:
      return state;
  }

}
