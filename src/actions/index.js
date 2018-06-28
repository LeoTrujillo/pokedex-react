import { ADD_COMMENT } from '../constants/action-types';

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
})