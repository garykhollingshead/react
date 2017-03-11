import * as types from "../actions/types";

export default function programReducer(state = {
  isLoading: false,
  programs: []
}, action) {
  switch(action.type) {
    case types.GET_PROGRAMS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case types.GET_PROGRAMS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        programs: action.programs
      });

    default:
      return state;
  }
}