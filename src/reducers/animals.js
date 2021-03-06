import {
  BUY_ANIMAL,
} from '../actions/animals';

import { AUTH_SUCCESS } from '../actions/auth';

const initialState = {

  animals: null,

};

export default (state = initialState, action) => {

  if (action.type === AUTH_SUCCESS) {
    return {
      ...state,
      animals: action.currentUser.animals
    }
  }
  if (action.type === BUY_ANIMAL) {
    //increment animal.count by 1 upon purchase
    let copy = [...state.animals];
    let index;
    const animalObj = copy.find((animal, i) => {
      if (animal.type === action.field) {
        index = i;
        return true;
      }
      return false;
    });
    animalObj.count += 1;
    return {
      ...state,
      animals: [
        ...copy.slice(0, index),
        animalObj,
        ...copy.slice(index + 1, copy.length + 1)
      ]
    }
  }
  return state;
} 
