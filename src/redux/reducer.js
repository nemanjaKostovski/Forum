import { SET_TOPICS } from '../util/ActionTypes';

const initialState = {
  topics: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_TOPICS:
      return {...state, topics: action.payload};
    default: 
      return state;
  }
}