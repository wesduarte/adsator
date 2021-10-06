import { GET_ADVERTISEMENTS } from '../actions/types';

const initialState = {
  advertisements: []
};

export default function(state = initialState, action) {

  switch(action.type) {
    case GET_ADVERTISEMENTS:

      return {
        ...state,
        advertisements: action.payload
      };
    default:
      return state;
  }
}
