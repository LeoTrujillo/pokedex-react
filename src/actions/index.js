import axios from 'axios';
import { ADD_COMMENT, GET_POKEMONS} from '../constants/action-types';

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

export function loadPokemons() {
  return dispatch => {
    return axios.get('https://pokeapi.co/api/v1/sprite/?limit=150')
      .then(res => {
        return dispatch(receivePokemons(res.data.objects))
      });
  }
}

function receivePokemons(pokemons) {
  return {
    type: GET_POKEMONS,
    pokemons
  }
}