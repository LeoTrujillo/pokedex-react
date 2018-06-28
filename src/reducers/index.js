import { ADD_COMMENT, GET_POKEMONS } from '../constants/action-types';

const initialState = {
  comments: [],
  pokemons: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [ ...state.comments, action.payload] };
    case GET_POKEMONS:
      return { ...state, pokemons: action.pokemons }
    default:
      return state;
  }
};

export default rootReducer;