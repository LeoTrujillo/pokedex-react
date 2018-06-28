import { ADD_COMMENT } from '../constants/action-types';

const initialState = {
  comments: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [ ...state.comments, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;